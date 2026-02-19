import { html } from 'hono/html'

export default () => {
  return html`
    <quiet-empty-state style="min-height: 400px;">
      <quiet-icon
        style="width: 100px; height: 100px;"
        slot="illustration"
        name="photo-off"
      ></quiet-icon>

      <h4>No media</h4>

      <p>
        You haven't uploaded any media yet. Once you do, you'll be able to see and edit them here.
      </p>

      <quiet-button
        variant="neutral"
        icon-label="Upload"
        data-on:click="document.getElementById('media_library_file_input').click()"
      >
        <quiet-icon slot="start" name="cloud-upload"></quiet-icon>
        Upload
      </quiet-button>

      <input
        data-bind:files
        data-on:input="setTimeout(() => { @post('/studio/media/upload', { filterSignals: '/files/' }); $files = null }, 100)"
        multiple
        type="file"
        id="media_library_file_input"
        style="display: none;"
      />
    </quiet-empty-state>
  `
}
