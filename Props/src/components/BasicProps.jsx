import React, { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center
        h-auto leading-none
        rounded-lg font-medium transition-all duration-300
        ${
          size === "small"
            ? "px-4 py-1 text-sm"
            : size === "large"
              ? "px-10 py-4 text-lg"
              : "px-6 py-4"
        }
        ${size === "large" ? "text-lg px-8 py-4" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "sucess" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-4xl font-bold mb-2">Basic Prop</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab
        sequi, architecto nisi consequuntur aspernatur ducimus excepturi eaque
        velit exercitationem.
      </p>
      <h5 className="text-2xl font-bold my-4">Click Count {clickCount}</h5>
      <div className="space-y-4">
        <h3 className="font-bold">Different Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
            disabled={false}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount - 1)}
            disabled={false}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
            disabled={false}
          />
          <Button text="Sucxess Button" color="sucess" disabled={false} />
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <h3 className="font-bold">Different Sizes</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Small" color="primary" size="small" />
          <Button text="Default" color="primary" />
          <Button text="Large" color="primary" size="large" />
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <h3 className="font-bold">Disabled Stale</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            disabled={false}
          />
          <Button
            text="Primary Button"
            color="primary"
            disabled={true}
          />
         
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
