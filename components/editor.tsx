import { Block, BlockNoteEditor, locales, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;

}

const Editor = ({
  onChange,
  initialContent,
  editable,
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const initialBlocks = initialContent ? JSON.parse(initialContent) : undefined;
  const [blocks, setBlocks] = useState<PartialBlock[]>(initialBlocks);
  const editor = useCreateBlockNote({ 
    initialContent: blocks, 
   uploadFile: handleUpload,
   dictionary: locales.ru
  });



  return (
    <div>
      <BlockNoteView
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          setBlocks(editor.document);
          onChange(JSON.stringify(blocks));
        }}
      />
    </div>

  );
}

export default Editor;