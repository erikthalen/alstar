import { html } from 'hono/html'
import { defineEventHandler } from '../event-emitter.ts'
import { getUserSettings, updateUserSetting } from '../helpers/sql/index.ts'

export default (userId: string | undefined) => {
  const settings = getUserSettings(userId)

  const setPreviewVisible = defineEventHandler(({ user, signals }) => {
    updateUserSetting(user, ['preview_enabled', signals.userSettings.preview_enabled])
  })

  return html` <header>
    <quiet-toggle-icon
      data-signals:user-settings="{ preview_enabled: ${settings.preview_enabled || 'true'} }"
      data-on:quiet-change="$userSettings.preview_enabled = evt.target.checked; ${setPreviewVisible}"
      data-attr:checked="$userSettings.preview_enabled"
      label="Toggle live preview visibility"
      effect="scale"
      style="--unchecked-color: var(--quiet-text-body); --checked-color: var(--quiet-text-body);"
      size="xs"
      id="hide_live_preview_button"
    >
      <quiet-icon slot="checked" name="eye"></quiet-icon>
      <quiet-icon slot="unchecked" name="eye-off"></quiet-icon>
    </quiet-toggle-icon>

    <quiet-tooltip
      open-delay="0"
      close-delay="0"
      distance="0"
      without-arrow
      for="hide_live_preview_button"
      class="ts-label"
      data-text="$userSettings.preview_enabled ? 'Disable live preview' : 'Enable live preview'"
    >
    </quiet-tooltip>

    <h1 class="truncate ts-label">Live preview</h1>

    <quiet-switch size="xs" checked>
      <quiet-icon slot="on-label" name="code-dots"></quiet-icon>
      <quiet-icon slot="off-label" name="browser"></quiet-icon>
    </quiet-switch>
  </header>`
}
