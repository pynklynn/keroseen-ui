import { LitElement } from "lit";
import { backdraftifyLit } from "@pynklynn/backdraft";

@backdraftifyLit
export class KeroseenComponent extends LitElement {
  public static componentName: string;

  protected static namespace = 'ks';

  public static get componentTag(): string {
    return `${this.namespace}-${this.componentName}`;
  }

  public static defineElement(namespace = KeroseenComponent.namespace) {
    this.namespace = namespace;
    customElements.define(this.componentTag, this);
  }
}