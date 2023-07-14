import { html } from "lit";
import type { HTMLTemplateResult } from "lit";
import { KeroseenComponent } from "../../scripts/keroseen-component.class";

export class KeroseenCardComponent extends KeroseenComponent {
  public static componentName = 'card';

  protected render(): HTMLTemplateResult {
    return html`<bd-slot></bd-slot>`;
  }
}