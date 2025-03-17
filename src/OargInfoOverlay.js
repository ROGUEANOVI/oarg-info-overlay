import { html, css, LitElement } from 'lit';
import { DileOverlayMixin } from '@dile/dile-overlay-mixin';
import { DileCloseDocumentClick } from '@dile/ui/mixins/close-document-click';


const icon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none">
<path fill="#000000" fill-rule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"/>
</svg>`;

export class OargInfoOverlay extends DileOverlayMixin(DileCloseDocumentClick(LitElement)) {
  static styles = [
    css`
      :host {
        display: inline-block;
        position: relative;
      }

      span {
        cursor: pointer;
      }

      #overlay {
        display: none;
        position: absolute;
        opacity: 0;
        width: max-content;
        background-color: var(--oarg-info-overlay-background-color, beige);
        color: var(--oarg-info-overlay-text-color, black);
        padding: 0.5rem;
        border: var(--oarg-info-overlay-border, 1px solid #ccc);
        border-radius: 5px;
        box-shadow: var(--oarg-info-overlay-shadow, 0 0 10px rgba(0, 0, 0, 0.2));
        font-style: var(--oarg-info-overlay-font-style, normal);
        transition: ease 0.5s;
        transition-property: transform, opacity;
        transform: translateY(-10px);
      }

      #overlay.opened {
        opacity: 1;
        transform: translateY(0);
      }

      svg {
        width: var(--oarg-info-overlay-icon-size, 20px);
        height: var(--oarg-info-overlay-icon-size, 20px);
      }
      path {
        fill: var(--oarg-info-overlay-icon-color, black);
        transition: fill 0.5s ease;
      }
      path[fill="none"] {
        fill: transparent;
      }
    `
  ];

  static properties = {
    opened: { type: Boolean },
  };

  render() {
    return html`
      <span @click=${this.toggle} id="trigger">
        ${icon}
      </span>
      <div id="overlay" class="${this._overlayClass}">
        <slot></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('opened')) {
      this.opened ? this.open() : this.close();
    }
  }
}
