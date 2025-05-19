import React, { useState } from 'react';

export default function AddProductForm({ addProduct, onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name || !price || !stock) {
      alert('Remplis tous les champs');
      return;
    }

    addProduct({
      id: Date.now(), // ID unique rapide
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
      image: image || 'https://via.placeholder.com/150',
    });

    onClose();
  };

  return (
    <form onSubmit={submit} className="add-product-form">
      <h2>Ajouter un produit</h2>
      <input placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        placeholder="Prix"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input
        placeholder="Image URL (optionnel)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Ajouter</button>
      <button type="button" onClick={onClose}>
        Annuler
      </button>
    </form>
  );
}
