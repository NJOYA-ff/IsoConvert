import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import AceEditor from "react-ace";
//mode
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-django";
import "ace-builds/src-noconflict/mode-hjson";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-html_ruby";
import "ace-builds/src-noconflict/mode-ion";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-jade";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-pascal";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-scrypt";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-sqlserver";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-xquery";
import "ace-builds/src-noconflict/mode-ada";
import "ace-builds/src-noconflict/mode-gcode";
import "ace-builds/src-noconflict/mode-robot";
import "ace-builds/src-noconflict/mode-text";
//snippets
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/sass";
//ext
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-code_lens";
import "ace-builds/src-noconflict/ext-command_bar";
import "ace-builds/src-noconflict/ext-elastic_tabstops_lite";
import "ace-builds/src-noconflict/ext-emmet";
import "ace-builds/src-noconflict/ext-error_marker";
import "ace-builds/src-noconflict/ext-hardwrap";
import "ace-builds/src-noconflict/ext-inline_autocomplete";
import "ace-builds/src-noconflict/ext-keybinding_menu";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-prompt";
import "ace-builds/src-noconflict/ext-themelist";
import "ace-builds/src-noconflict/ext-modelist";
import "ace-builds/src-noconflict/ext-settings_menu";
import "ace-builds/src-noconflict/ext-simple_tokenizer";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-static_highlight";
import "ace-builds/src-noconflict/keybinding-emacs";
//theme
import "ace-builds/src-noconflict/theme-gruvbox_dark_hard";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-gruvbox_light_hard";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/theme-cloud9_night_low_color";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-one_dark";
//

import { codeSlashOutline, colorPaletteOutline, play } from "ionicons/icons";
import { useHistory } from "react-router";
const Editor: React.FC = () => {
  const theme = [
    "gob",
    "xcode",
    "twilight",
    "katzenmilch",
    "cobalt",
    "chrome",
    "kurior",
    "gruvbox",
    "clouds",
    "dracula",
    "monokai",
    "textmate",
    "terminal",
    "github_dark",
    "github",
    "chaos",
    "ambiance",
    "dawn",
    "gruvbox_dark_hard",
    "idle_fingers",
    "gruvbox_light_hard",
    "merbivore",
    "cloud9_day",
    "cloud9_night_low_color",
    "tomorrow_night_eighties",
    "tomorrow",
    "tomorrow_night_bright",
    "tomorrow_night_blue",
    "solarized_light",
    "solarized_dark",
    "mono_industrial",
    "iplastic",
    "crimson_editor",
    "kr_theme",
    "nord_dark",
    "merbivore_soft",
    "vibrant_ink",
    "dreamweaver",
    "one_dark",
  ];
  const languages = [
    "java",
    "javascript",
    "python",
    "mysql",
    "sql",
    "sqlserver",
    "gcode",
    "css",
    "sass",
    "c_cpp",
    "html",
    "robot",
    "ion",
    "typescript",
    "tsx",
    "perl",
    "html_ruby",
    "hjson",
    "django",
    "jade",
    "xquery",
    "ada",
    "text",
    "pascal",
    "scrypt",
    "ruby",
    "xml",
    "php",
    "jsx",
  ];

  const [themeEdit, setthemeEdit] = useState<string>("monokai");
  const [Language, setLanguage] = useState<string>("javascript");
  const [code, setcode] = useState("");
  const History = useHistory();
  const EditorRef = useRef<AceEditor | null>(null);
  useEffect(() => {
    if (EditorRef.current) {
      EditorRef.current.editor;
      console.log(EditorRef.current.editor);
    }
  }, []);
  function handlecode() {
    if (EditorRef.current) {
      const codeEditor = EditorRef.current.editor.getValue();
      try {
        const executecode = new Function(codeEditor);
        executecode();
      } catch (error) {
        console.error(error);
      }
    }
  }
  const handleclear = () => {
    setcode("");
    console.clear();
  };
  return (
    <IonPage>
      <IonContent>
        <IonItem className="edit" color={"dark"}>
          <IonIcon
            size="large"
            color="success"
            icon={colorPaletteOutline}
          ></IonIcon>
          <IonSelect
            className="theme"
            slot="end"
            value={themeEdit}
            interface="popover"
            onIonChange={(e) => setthemeEdit(e.detail.value)}
          >
            {theme.map((unit) => (
              <IonSelectOption slot="end" key={unit} value={unit}>
                {unit}
              </IonSelectOption>
            ))}
          </IonSelect>
          <IonLabel className="th" color={"success"}>
            {themeEdit}
          </IonLabel>
        </IonItem>
        <br />

        <IonItem className="edit" color={"dark"}>
          <IonIcon
            size="large"
            slot="start"
            color="danger"
            icon={codeSlashOutline}
          ></IonIcon>
          <IonSelect
            className="theme"
            slot="end"
            value={Language}
            interface="popover"
            onIonChange={(e) => setLanguage(e.detail.value)}
          >
            {languages.map((lang) => (
              <IonSelectOption slot="end" key={lang} value={lang}>
                {lang}
              </IonSelectOption>
            ))}
          </IonSelect>
          <IonLabel className="th" color={"danger"}>
            {Language}
          </IonLabel>
        </IonItem>

        <br />

        <IonButton onClick={handleclear} className="cl">
          Clear
        </IonButton>
        <AceEditor
          style={{ height: "100%", width: "100%" }}
          className="editor"
          mode={Language}
          theme={themeEdit}
          value={code}
          ref={EditorRef}
          showGutter={true}
          showPrintMargin={true}
          highlightActiveLine={true}
          navigateToFileEnd={true}
          onChange={setcode}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          enableSnippets={true}
          wrapEnabled={true}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          fontSize={"1.3em"}
        ></AceEditor>
      </IonContent>
    </IonPage>
  );
};

export default Editor;
