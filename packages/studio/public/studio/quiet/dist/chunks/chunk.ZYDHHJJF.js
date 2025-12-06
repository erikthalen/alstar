/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// node_modules/@web/test-runner-commands/browser/commands.mjs
var PARAM_SESSION_ID = "wtr-session-id";
var sessionId = new URL(window.location.href).searchParams.get(PARAM_SESSION_ID);
function isObject(payload) {
  return payload != null && typeof payload === "object";
}
async function executeServerCommand(command, payload, pluginName) {
  if (typeof sessionId !== "string") {
    throw new Error(
      "Unable to execute server commands in a browser not controlled by the test runner. Use the debug option from the watch menu to debug in a controlled browser."
    );
  }
  let sendMessageWaitForResponse;
  try {
    const webSocketModule = await import("/__web-dev-server__web-socket.js");
    ({ sendMessageWaitForResponse } = webSocketModule);
  } catch (error) {
    throw new Error(
      "Could not setup web socket connection. Are you executing this test through Web Test Runner?"
    );
  }
  try {
    const response = await sendMessageWaitForResponse({
      type: "wtr-command",
      sessionId,
      command,
      payload
    });
    if (!response.executed) {
      let msg;
      if (pluginName) {
        msg = `Unknown command ${command}. Add the ${pluginName} to your config.`;
      } else {
        msg = `Unknown command ${command}. Did you install a plugin to handle this command?`;
      }
      throw new Error(msg);
    }
    return response.result;
  } catch (error) {
    throw new Error(
      `Error while executing command ${command}${payload ? ` with payload ${JSON.stringify(payload)}` : ""}: ${error.message}`
    );
  }
}
function sendMouse(options) {
  return executeServerCommand("send-mouse", options);
}
var snapshotConfig;
var cachedSnapshots;
async function getSnapshotConfig() {
  if (!snapshotConfig) {
    snapshotConfig = await executeServerCommand(
      "get-snapshot-config",
      void 0,
      "snapshotPlugin from @web/test-runner-commands"
    );
  }
  return snapshotConfig;
}
var ESCAPE_REGEX = /snapshots\[[^\]]+] = (\n)?(?<content>`[^`]*`)/gm;
var escapeContent = (content) => {
  [...content.matchAll(ESCAPE_REGEX)].forEach(({ groups: { content: itemContent } }) => {
    content = content.replaceAll(itemContent, encodeURIComponent(itemContent));
  });
  return content;
};
async function getSnapshots({ cache = true } = {}) {
  if (cache && cachedSnapshots) {
    return cachedSnapshots;
  }
  const result = await executeServerCommand(
    "get-snapshots",
    void 0,
    "snapshotPlugin from @web/test-runner-commands"
  );
  if (typeof result?.content !== "string") {
    throw new Error("Expected a result as string");
  }
  const content = `${escapeContent(result.content)}/* ${Math.random()} */`;
  const module = await import(`data:text/javascript;charset=utf-8,${content}`);
  if (!module || !isObject(module.snapshots)) {
    throw new Error("Expected snapshot result to be a module that exports an object.");
  }
  cachedSnapshots = module.snapshots;
  return cachedSnapshots;
}
async function getSnapshot(options) {
  if (!isObject(options)) throw new Error("You must provide a payload object");
  if (typeof options.name !== "string") throw new Error("You must provide a snapshot name");
  const snapshots = await getSnapshots(options);
  return snapshots[options.name];
}
async function saveSnapshot(options) {
  if (!isObject(options)) throw new Error("You must provide a payload object");
  if (typeof options.name !== "string") throw new Error("You must provide a snapshot name");
  if (options.content !== void 0 && typeof options.content !== "string")
    throw new Error("You must provide a snapshot content");
  const snapshots = await getSnapshots();
  snapshots[options.name] = options.content;
  return executeServerCommand(
    "save-snapshot",
    options,
    "snapshotPlugin from @web/test-runner-commands"
  );
}

export {
  sendMouse,
  getSnapshotConfig,
  getSnapshot,
  saveSnapshot
};
