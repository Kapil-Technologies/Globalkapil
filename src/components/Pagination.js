import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

// --------------------------------------------------------------------------- Styled Components

export const NumberContainer = styled(Box)(({ theme, condition }) => ({
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  border: "1px solid #012c54",
  fontSize: "18px",
  borderRadius: "5px",
    cursor: "pointer",
    background: condition ? '#012c54' : null,
  color: condition ? 'white' : null
}));

export const LeftArrow = styled(FiChevronLeft)(({ theme, image, path }) => ({
  fontSize: "20px",
  cursor: "pointer",
}));
export const RightArrow = styled(FiChevronRight)(({ theme, image, path }) => ({
  fontSize: "20px",
  cursor: "pointer",
}));

// --------------------------------------------------------------------------- Main  Components

function Pagination({ data, Findex, Lindex,Records }) {
//   console.log(data);
  const [currentpage, setcurrentPage] = useState(1);
  const recordsPerpage = 2;
  const lastIndex = currentpage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const records = data.slice(firstIndex, lastIndex);
  const numberofpages = Math.ceil(data.length / recordsPerpage);
  const numbers = [...Array(numberofpages + 1).keys()].slice(1);

  console.log(firstIndex, lastIndex);

  useEffect(() => {
    Findex(firstIndex);
      Lindex(lastIndex)
      Records(records)

  }, []);
    
    console.log(records)

  const handlePreviousPage = () => {
    console.log("PPage");
    if (currentpage !== 1) {
      setcurrentPage(currentpage - 1);
    }
  };

  const handleNextPage = () => {
    console.log("PPage");
    if (currentpage !== numberofpages) {
      setcurrentPage(currentpage + 1);
    }
  };

  const handleChangeCurrentPage = (id) => {
    console.log("PPage");
    setcurrentPage(id);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <LeftArrow onClick={handlePreviousPage} />

      {numbers.map((item, index) => (
        <NumberContainer
          key={index}
          condition={currentpage === item}
          onClick={() => handleChangeCurrentPage(item)}
        >
          {item}
        </NumberContainer>
      ))}

      <RightArrow onClick={handleNextPage} />
    </Stack>
  );
}

export default Pagination;
