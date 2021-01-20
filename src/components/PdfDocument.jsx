import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginTop: 24,
    fontSize: 20,
  },
  content: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",

    margin: "8pt 16pt 0",
  },
  dots: {
    flexGrow: 1,
    borderBottom: "1pt dotted black",
  },
  mb30: {
    marginBottom: 30,
  },
});
const handleCamelToCapital = (text) => {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

const PdfContent = ({ data, title }) => {
  return (
    <View>
      <View style={styles.title}>
        <Text>{title || ""}</Text>
      </View>
      {data &&
        Object.keys(data).map((ele, index) => {
          return (
            <View key={index} style={styles.info}>
              <Text>{handleCamelToCapital(ele)}</Text>
              <View style={styles.dots}></View>
              <Text>{data[ele]}</Text>
            </View>
          );
        })}
    </View>
  );
};

// Create Document Component
const PdfDocument = ({ data, vendor, arrayContract }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {data && (
          <PdfContent
            data={data}
            title={vendor ? "Vendor Information" : "Contract Information"}
          />
        )}

        {arrayContract &&
          arrayContract.map((ele, index) => (
            <View key={index}>
              <View style={styles.mb30} />
              <PdfContent data={ele} title={"Contract Information"} />
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PdfDocument;
