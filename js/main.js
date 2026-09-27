class TarjetaProducto extends HTMLElement {
  connectedCallback() {
    const imagen = this.getAttribute('imagen') || 'https://via.placeholder.com/150';
    const titulo = this.getAttribute('titulo') || 'Producto';
    const precio = this.getAttribute('precio') || '0';

    this.innerHTML = `
      <div class="tarjeta">
        <img src="${imagen}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p class="precio">$${precio}</p>
        <button class="btn-comprar">Agregar al carrito</button>
      </div>
    `;

    this.querySelector('.btn-comprar').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('agregar-producto', {
        detail: { titulo, precio },
        bubbles: true
      }));
    });
  }
}

customElements.define('tarjeta-producto', TarjetaProducto);