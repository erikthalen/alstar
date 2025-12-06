/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  registerTranslation
} from "../chunks/chunk.N7C6RCMV.js";
import "../chunks/chunk.32UODNLB.js";

// src/translations/de.ts
var translation = {
  /* cSpell:disable */
  $code: "de",
  $name: "Deutsch",
  $dir: "ltr",
  breadcrumbs: "Brotkrumens",
  carousel: "Karussell",
  clearEntry: "Eingabe l\xF6schen",
  close: "Schlie\xDFen",
  collapse: "Einklappen",
  colorValue: "Farbwert",
  copied: "Kopiert",
  copyToClipboard: "In die Zwischenablage kopieren",
  decrease: "Verringern",
  disabled: "deaktiviert",
  dragFileHereOrChooseFromFolder: "Ziehen Sie die Datei hierher oder w\xE4hlen Sie einen Ordner aus",
  dragFilesHereOrChooseFromFolder: "Ziehen Sie Dateien hierher oder w\xE4hlen Sie sie aus einem Ordner aus",
  error: "Fehler",
  expand: "Erweitern",
  feed: "Beitr\xE4ge",
  firstPage: "Erste Seite",
  hidePassword: "Passwort verbergen",
  hide: "Verbergen",
  hue: "Farbton",
  increase: "Erh\xF6hen",
  itemAdded: (item) => `${item} hinzugef\xFCgt`,
  itemRemoved: (item) => `${item} entfernt`,
  itemSelected: (item) => `${item} ausgew\xE4hlt`,
  jumpBackward: "Zur\xFCckspringen",
  jumpForward: "Vorw\xE4rtsspringen",
  lastPage: "Letzte Seite",
  loading: "Wird geladen",
  multipleSelectionsAllowed: "Mehrfachauswahl erlaubt.",
  next: "N\xE4chste",
  noResultsFound: "Keine Ergebnisse gefunden",
  numberOfTotal: (number, total) => `${number} von ${total}`,
  opacity: "Opazit\xE4t",
  pageNumber: (number) => `Seite ${number}`,
  pagination: "Paginierung",
  percentLuminosity: (percentage) => `${percentage} Leuchtkraft`,
  percentSaturation: (percentage) => `${percentage} S\xE4ttigung`,
  pleaseSelectAnOption: "Bitte w\xE4hlen Sie eine Option",
  pressSpaceForOneSecondToActivate: "Zum Aktivieren eine Sekunde lang die Leertaste dr\xFCcken",
  previous: "Vorherige",
  remove: "Entfernen",
  removeItem: (item) => `${item} entfernen`,
  resize: "Gr\xF6\xDFe \xE4ndern",
  resultsAvailable: (count) => {
    if (count === 1) return "1 Ergebnis verf\xFCgbar";
    return `${count} Ergebnisse verf\xFCgbar`;
  },
  scrollableRegion: "Scrollbarer Bereich",
  selectAColorFromTheScreen: "Farbe vom Bildschirm ausw\xE4hlen",
  selected: "Ausgew\xE4hlt",
  share: "Aktie",
  showPassword: "Passwort anzeigen",
  show: "Anzeigen",
  showingNumberOfTotalItems: (number, total) => {
    if (number === 1) return `Zeige ${number} von ${total} ${total === 1 ? "artikel" : "artikeln"}`;
    return `Zeige ${number} von ${total} artikeln`;
  },
  showingAllNumberItems: (number) => {
    if (number === 1) return `Zeige ${number} artikel`;
    return `Zeige alle ${number} artikel`;
  },
  spoiler: "Spoiler",
  toggleNavigation: "Navigation umschalten",
  useArrowKeysToNavigateEnterToSelect: "Verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Dr\xFCcken Sie Enter zum Ausw\xE4hlen.",
  visualComparisonSlider: "Visueller Vergleichsregler",
  zoomIn: "Heranzoomen",
  zoomOut: "Herauszoomen"
  /* cSpell:enable */
};
registerTranslation(translation);
var de_default = translation;
export {
  de_default as default
};
