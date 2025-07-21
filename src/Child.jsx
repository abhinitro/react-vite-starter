import React, { useState } from 'react';

const items = ['Apple', 'Banana', 'Orange', 'Mango'];

export default function DragDropPanel() {
  const [dragItems, setDragItems] = useState(items);
  const [dropItems, setDropItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('item', item);
  };

  const handleDrop = (e) => {
    const item = e.dataTransfer.getData('item');
    if (!dropItems.includes(item)) {
      setDropItems([...dropItems, item]);
      setDragItems(dragItems.filter(i => i !== item));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '40px' }}>
      {/* Draggable Panel */}
      <div style={{ flex: 1 }}>
        <h3>Drag from here</h3>
        {dragItems.map((item, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{
              margin: '8px',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              cursor: 'grab'
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Droppable Panel */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          flex: 1,
          minHeight: '200px',
          backgroundColor: '#e0ffe0',
          padding: '10px',
          border: '2px dashed green'
        }}
      >
        <h3>Drop here</h3>
        {dropItems.length === 0 ? (
          <p>Drop items here</p>
        ) : (
          dropItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                margin: '8px',
                padding: '10px',
                backgroundColor: '#d0f0d0',
                border: '1px solid #aaa'
              }}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
