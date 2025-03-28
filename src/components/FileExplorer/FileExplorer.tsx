import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, Typography } from '@mui/material';
import Image from "next/image";
import folder from "../../../public/Icons/folder.svg";

interface ProjectData {
  title: string;
  image: string;
  description: string;
  url: string;
  tags: string[];
}

const FileExplorer = ({ close, maximize }: { close: () => void, maximize: () => void }) => {
  const handleFolderClick = (folderName: string) => {
    alert(`You clicked on ${folderName}`);
  };

  return (
    <WindowLayout closeWindow={close} maximizeWindow={maximize}>
      <Grid container spacing={3} sx={{ padding: "20px", background: "#f0f8ff", height: "100%" }}>
        {["folder1", "folder2", "folder3"].map((folderName, index) => (
          <Grid
            item
            xs={1.5}
            key={index}
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => handleFolderClick(folderName)}
          >
            <Image
              src={folder}
              alt={folderName}
              width={60}
              height={70}
            />
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              {folderName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </WindowLayout>
  );
};

export default FileExplorer;