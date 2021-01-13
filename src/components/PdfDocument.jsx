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
});

// Create Document Component
const PdfDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>Vendor UI Information</Text>
        </View>
        <View style={styles.section}>
          <Text>Overview</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text>Name</Text>
            <View style={styles.dots}></View>
            <Text>{data.name}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoName}>Type</Text>
            <View style={styles.dots}></View>
            <Text>{data.type}</Text>
          </View>
          <View style={styles.info}>
            <Text>Total Spend</Text>
            <View style={styles.dots}></View>
            <Text>{data.totalSpend}</Text>
          </View>
          <View style={styles.info}>
            <Text>Country Of Registration</Text>
            <View style={styles.dots}></View>
            <Text>{data.countryOfRegistration}</Text>
          </View>
          <View style={styles.info}>
            <Text>Company Registration Number</Text>
            <View style={styles.dots}></View>
            <Text>{data.companyRegistrationNumber}</Text>
          </View>
          <View style={styles.info}>
            <Text>Qualified</Text>
            <View style={styles.dots}></View>
            <Text>{data.qualified}</Text>
          </View>
          <View style={styles.info}>
            <Text>Company Website</Text>
            <View style={styles.dots}></View>
            <Text>{data.companyWebsite}</Text>
          </View>
          <View style={styles.info}>
            <Text>Internal Representative</Text>
            <View style={styles.dots}></View>
            <Text>{data.internalRepresentative}</Text>
          </View>
          <View style={styles.info}>
            <Text>Relationship Since</Text>
            <View style={styles.dots}></View>
            <Text>{data.relationshipSince}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Contact Information</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text>Main Contract</Text>
            <View style={styles.dots}></View>
            <Text>{data.mainContract}</Text>
          </View>
          <View style={styles.info}>
            <Text>Official Email</Text>
            <View style={styles.dots}></View>
            <Text>{data.officialEmail}</Text>
          </View>
          <View style={styles.info}>
            <Text>Secondary Email</Text>
            <View style={styles.dots}></View>
            <Text>{data.secondaryEmail}</Text>
          </View>
          <View style={styles.info}>
            <Text>Mobile Number</Text>
            <View style={styles.dots}></View>
            <Text>{data.mobileNumber}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
