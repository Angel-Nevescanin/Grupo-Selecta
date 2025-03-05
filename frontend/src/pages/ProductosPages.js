import React from 'react';
import useProductos from '../hooks/useProductos';

const ProductosPage = () => {
    const { productos, loading, error } = useProductos();

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;

    return(
        <div>
            <h2>Lista de Prodcutos</h2>
            <ul>
                {Productos.map((producto) => (
                    <li key={producto.id}>{producto.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductosPage;