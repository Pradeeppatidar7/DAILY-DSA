const startEnd = (str, start, end) => {
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === start) {
        console.log("Start condition met");
        startIndex = i;
        break;
      }
    }

    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === end) {
        console.log("End condition met");
        endIndex = i;
        break;
      }
    }

    return {
      startIndex,
      endIndex
    };
  };

  let string = "Apple";
  console.log(startEnd(string, "A", "e"));

  