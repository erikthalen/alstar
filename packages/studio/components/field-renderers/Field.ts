import { fields } from '#index.ts'
import { css } from '@alstar/framework'
import { FieldComponent, FieldTypeMap } from '@alstar/types'
import { html } from 'hono/html'

export function getFieldStructure<T extends keyof FieldTypeMap>(
  type: T,
): FieldComponent<T> | undefined {
  return fields[type]?.component
}

type FieldStructure<T extends keyof FieldTypeMap> = FieldTypeMap[T]['props'] & { type: T }

export default <T extends keyof FieldTypeMap>(props: {
  structure: FieldStructure<T>
  id: number | `${number}`
}) => {
  const field = getFieldStructure(props.structure.type)

  if (!field || typeof field !== 'function') {
    return html`
      <quiet-callout style="margin-block: 1rem" variant="destructive">
        <quiet-icon slot="icon" name="file-unknown"></quiet-icon>
        No field of type: "<code>${props.structure.type}</code>"
      </quiet-callout>
    `
  } else {
    return html` <div class="field" id="field_${props.id}">
      ${field(props.id, props.structure as any)}
    </div>`
  }
}

export const styles = css`
  .field {
    margin-block: 1rem;
    
    .field-label {
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .field-description {
      margin-block-end: 0.25em;
      color: var(--quiet-text-muted);
      font-size: 0.875em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
