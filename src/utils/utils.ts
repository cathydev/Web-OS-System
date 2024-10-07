import { useState, useEffect } from 'react';

export const onButtonClick = () => {
    const pdfFilename = "CV_Catherine.pdf";
    const link = document.createElement("a");
    link.href = pdfFilename;
    link.download = pdfFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
