"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useBlockNote, useCreateBlockNote } from "@blocknote/react";


// Our <Editor> component we can reuse later
export default function Editor() {
    // Creates a new editor instance.
    const editor = useCreateBlockNote();
   
    // Renders the editor instance using a React component.
    return <BlockNoteView editor={editor} />;
  }