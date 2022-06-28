import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Image = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

interface Props {
  link: string;
  image: string;
}
function SocialMediaLink(props: Props) {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.1 }}>
      <a target="_blank" rel="noreferrer" href={props.link}>
        <Image src={props.image} alt={props.link} />
      </a>
    </motion.div>
  );
}

export default SocialMediaLink;
