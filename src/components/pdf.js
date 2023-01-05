import React, { useState } from "react";
import styled from "@emotion/styled";
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip
} from "@chakra-ui/react";

const PdfContainer = styled.div`
  border-radius: 0.5rem;
  overflow: auto;
  .react-pdf__Page__textContent {display: none;}
  .react-pdf__Page__annotations {display: none;}
`

const ScrollbarOverflowContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`

const Pdf = ({ src }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [sliderValue, setSliderValue] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error) {
    console.log(error);
  }

  return (
    <>
      <ScrollbarOverflowContainer>
        <PdfContainer>
          <Document
            file={src}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </PdfContainer>
      </ScrollbarOverflowContainer>
      <br />
      <br />

      <Center>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={1}
          min={1}
          max={numPages}
          onChange={(value) => { setPageNumber(value); setSliderValue(value); }}
          maxW="75%"
        >

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>

          <Tooltip label={`Page ${sliderValue}`}>
            <SliderThumb />
          </Tooltip>
        </Slider>
      </Center>
      <br />
    </>
  )
}

export default Pdf;