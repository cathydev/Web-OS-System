import { useState } from "react";
import WindowLayout from "../WindowLayout/WindowLayout";
import { Grid, Typography } from '@mui/material';
import Image from "next/image";
import folder from "../../../public/Icons/folder.svg";
import Modal from '@mui/material/Modal';

const FileExplorer = ({ close, maximize }: { close: () => void, maximize: () => void }) => {
  const [open, setOpen] = useState(false);
  const [folderName, setFolderName] = useState<string>("");
  const handleClose = () => setOpen(false);

  const handleFolderClick = (folderName: string) => {
    setOpen(true);
    setFolderName(folderName);

    setTimeout(() => setOpen(false), 1300);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div>
            <div style={{ padding: "20px", background: "#fff", color: "#000", borderRadius: "8px", width: "300px", textAlign: "center" }}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {folderName} is empty.
              </Typography>
            </div>
          </div>
        </Modal>
      </Grid>
    </WindowLayout>
  );
};

export default FileExplorer;