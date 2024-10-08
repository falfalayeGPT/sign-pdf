import React, { CSSProperties, useEffect, useRef, useState } from "react";
import interact from "interactjs";
import { Controls } from "./Controls";
import { useFileStore } from "@/src/file-store";
import { IoIosCheckboxOutline } from "react-icons/io";
import { RootState } from "@/pages/_app";
import { useSelector } from "react-redux";
import { Signature, TextSignature } from "../DisplayFile/Options";
export type content_type = {
  type: "text" | "initials" | "date" | "checkbox" | "signature";
} | string;
interface WrapperProps {
  id: number;
  initialContent:
  content_type;
  initialX: number;
  initialY: number;
  initialWidth: number;
  initialHeight: number;
  onDuplicate: (id: number) => void;
  onDelete: (id: number) => void;
  onMove: (id: number, x: number, y: number) => void;
  onResize: (id: number, width: number, height: number) => void;
  onContentChange: (id: number, content: string) => void;
  onFocus?: () => void;
  onInput?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const Wrapper: React.FC<WrapperProps> = ({
  id,
  initialContent,
  initialX,
  initialY,
  initialWidth,
  initialHeight,
  className,
  style,
  onDuplicate,
  onDelete,
  onMove,
  onResize,
  onContentChange,
  onFocus,
  onInput,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [controlsPosition, setControlsPosition] = useState<"top" | "bottom">(
    "top"
  );
  // const [showInitialContent, setShowInitialContent] = useState(true);
  const { setCurrentTextElement } = useFileStore();
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.transform = `translate(${initialX}px, ${initialY}px)`;
      wrapper.style.width = `${initialWidth}px`;
      wrapper.style.height = `${initialHeight}px`;
      wrapper.setAttribute("data-x", initialX.toString());
      wrapper.setAttribute("data-y", initialY.toString());

      interact(wrapper)
        .draggable({
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: "parent",
              endOnly: false,
            }),
          ],
          listeners: {
            move: dragMoveListener,
            end: (event) => {
              const target = event.target;
              const x = parseFloat(target.getAttribute("data-x") || "0");
              const y = parseFloat(target.getAttribute("data-y") || "0");
              onMove(id, x, y);
            },
          },
        })
        .resizable({
          edges: { top: true, left: true, bottom: true, right: true },
          listeners: {
            move: resizeMoveListener,
            end: (event) => {
              const target = event.target;
              const width = parseFloat(target.style.width);
              const height = parseFloat(target.style.height);
              onResize(id, width, height);
            },
          },
          modifiers: [
            interact.modifiers.restrictEdges({
              outer: "parent",
            }),
            interact.modifiers.restrictSize({
              min: { width: 50, height: 20 },
            }),
          ],
        });
    }
  }, [id, initialX, initialY, initialWidth, initialHeight, onMove, onResize]);

  const updateControlPosition = () => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const rect = wrapper.getBoundingClientRect();
      const parentRect = wrapper.parentElement!.getBoundingClientRect();

      if (rect.top - parentRect.top < 40) {
        setControlsPosition("bottom");
      } else {
        setControlsPosition("top");
      }
    }
  };

  const dragMoveListener = (event: any) => {
    const target = event.target;
    const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);

    updateControlPosition();
  };

  const resizeMoveListener = (event: any) => {
    const target = event.target;
    let x = parseFloat(target.getAttribute("data-x")) || 0;
    let y = parseFloat(target.getAttribute("data-y")) || 0;

    target.style.width = `${event.rect.width}px`;
    target.style.height = `${event.rect.height}px`;

    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);

    updateControlPosition();
  };

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    onContentChange(id, e.currentTarget.textContent || "");
    if (onInput) {
      onInput();
    }
  };

  const [showControls, setShowControls] = useState(true);
  const clearOutline =
    showControls ||
    initialContent == "type something..." ||
    initialContent === "";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const controlsElement = document.querySelector(".controls");
    if (controlsElement?.contains(e.target as Node)) {
      setShowControls(true);
    }
  };
  const inputRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      if (
        inputRef.current.textContent === "" &&
        typeof initialContent === "string"
      ) {
        inputRef.current.textContent = initialContent;
      }
    }
    console.log(inputRef.current)
  }, [inputRef.current]);

  const [editable, setEditable] = useState(false);
  const signatureSVGString = useSelector((state: RootState) => state.tool.signatureSVGString);
  const sharedProps = {
    tabIndex: 0,
    ref: inputRef,
    onFocus: () => {
      setShowControls(true);
      setEditable(true);
      if (onFocus) {
        onFocus();
      }
      setCurrentTextElement(inputRef.current);
    },
    onBlur: () => {
      setShowControls(false);
      setEditable(false);
    },
  };



  return (
    <div
      className={`wrapper${clearOutline ? "" : " no-outline"}`}
      ref={wrapperRef}
      style={{ position: "absolute" }}
      onMouseMove={handleMouseMove}
    >
      <Controls
        position={controlsPosition}
        onDuplicate={() => onDuplicate(id)}
        onDelete={() => onDelete(id)}
        show={showControls}
      />
      <div
        className={`resize-handle top-left${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle top-center${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle top-right${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle right-center${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle bottom-right${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle bottom-center${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle bottom-left${clearOutline ? "" : " clear"}`}
      ></div>
      <div
        className={`resize-handle left-center${clearOutline ? "" : " clear"}`}
      ></div>
      {typeof initialContent === "string" ? (
        <div
          className={`input${className ? " " + className : ""}`}
          // ref={inputRef}
          contentEditable={editable}
          suppressContentEditableWarning
          onInput={handleContentChange}
          {...sharedProps}
        />
      ) : initialContent.type === "checkbox" ? (
        <IoIosCheckboxOutline
          className="icon input"
          style={style}
          {...sharedProps}
        />
      ) : (initialContent.type === "signature" ? (
        signatureSVGString ?
          <Signature sharedProps={sharedProps} /> :
          <TextSignature sharedProps={sharedProps} />
      ) : null)}
      {/* {showInitialContent || (!showControls && !initialContent.length) ? <div className="initial-content">
                {initialContent}
            </div> : null} */}
    </div>
  );
};
