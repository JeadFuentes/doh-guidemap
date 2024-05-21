import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'


function ImageZoomInOut({ imageUrl }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const imageRef = useRef(null);

  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1);
  };

  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp);

    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [imageRef, scale]);

  return (
      <>
      <div className="fixed top-20 left-2 p-4 bg-green-200 border-2 border-green-600">
        <button className="bg-green-500 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center" onClick={handleZoomIn}>
         Zoom <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </button>
        <br />
        <button className="bg-green-500 text-black text-md px-10 rounded-md w-40 h-10 flex flex-row items-center justify-center" onClick={handleZoomOut}>
         Zoom <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
        </button>
    </div>

      <img
        ref={imageRef}
        src={imageUrl}
        alt=""
        style={{
          width: "50vw",
          height: "auto",
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          cursor: "move",
        }}
        draggable={false}
      />
      </>
  );
}

export default ImageZoomInOut;