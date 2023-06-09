import React from "react";
import PropTypes from "prop-types";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles";
import { useRouter } from "next/router";

const MenuMobile = ({ menuData }) => {
  const router = useRouter();

  return (
    <Accordion allowToggle>
      <AccordionItem {...styles.accordionItem}>
        <Flex {...styles.menuHeader}>
          <Link href={"/"} passHref>
            <Heading {...styles.heading}>MARÍA ROJAS ARIAS</Heading>
          </Link>
          <AccordionButton {...styles.accordionButton}>—</AccordionButton>
        </Flex>
        <AccordionPanel {...styles.accordionPanel}>
          <Flex {...styles.linksPanel}>
            {router.asPath === "/projects" ? (
              <Link href={"/projects"} passHref>
                <Text {...styles.menuLink.currentPath}>
                  {router.locale === "en" ? "Projects" : "Proyectos"}
                </Text>
              </Link>
            ) : (
              <Link href={"/projects"} passHref>
                <Text {...styles.menuLink}>
                  {router.locale === "en" ? "Projects" : "Proyectos"}
                </Text>
              </Link>
            )}
            {menuData.pagesList.map((page, key) => {
              if (router.query.page === page.slug) {
                return (
                  <Link href={"/" + page.slug} key={key} passHref>
                    <Text {...styles.menuLink.currentPath}>{page.title}</Text>
                  </Link>
                );
              } else {
                return (
                  <Link href={"/" + page.slug} key={key} passHref>
                    <Text {...styles.menuLink}>{page.title}</Text>
                  </Link>
                );
              }
            })}
            {router.locale === "en" ? (
              <Link href={router.asPath} locale="es" passHref>
                <Text {...styles.menuLink}>ESPAÑOL</Text>
              </Link>
            ) : (
              <Link href={router.asPath} locale="en" passHref>
                <Text {...styles.menuLink}>ENGLISH</Text>
              </Link>
            )}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

MenuMobile.propTypes = {
  menuData: PropTypes.object.isRequired,
};

export default MenuMobile;
