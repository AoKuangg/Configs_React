import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function Formulary({titulo}) {
  const { id } = useParams();
  const [nombre] = useOutletContext();
  return (
    <>
      <h1> {titulo} de {nombre}</h1>
      <strong>{id}</strong>

    </>
  );
}