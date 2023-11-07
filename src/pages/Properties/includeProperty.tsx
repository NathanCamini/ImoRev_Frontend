import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import api from "@/services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

// type Property = {
//   valorAvaliacao: number,
//     valorAluguel: number,
//     tipo: string,
//     links: string[],
//     matricula: number,
//     endereco: {
//       rua: string,
//       numero: number,
//       complemento: string,
//       cidade: string,
//       bairro: string,
//       uf: string,
//       cep: string,
//     },
// }

export function includeProperty() {
  const [property, setProperty] = useState({
    valorAvaliacao: 0,
    valorAluguel: 0,
    tipo: "",
    links: [""],
    matricula: 0,
    endereco: {
      rua: "",
      numero: 0,
      complemento: "",
      cidade: "",
      bairro: "",
      uf: "",
      cep: "",
    }});

  const handleChange = (e: any) => {
    const value = e.target.value;
    e.target.type === "number"
      ? setProperty({
          ...property,
          [e.target.name]: Number(value),
        })
      : setProperty({
          ...property,
          [e.target.name]: value,
        });
  };

  const handleChangeSelect = (e: any) => {
    const value = e;
    setProperty({
      ...property,
      tipo: value,
    });
  };

  const handleChangeEndereco = (e: any) => {
    const value = e.target.value;
    e.target.type === "number"
      ? setProperty({
          ...property,
          endereco: {
            ...property.endereco,
            [e.target.name]: Number(value),
          },
        })
      : setProperty({
          ...property,
          endereco: {
            ...property.endereco,
            [e.target.name]: value,
          },
        });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      data: {
        valorAvaliacao: property?.valorAvaliacao,
        valorAluguel: property?.valorAluguel,
        tipo: property?.tipo,
        links: property?.links,
        matricula: property?.matricula,
        endereco: {
          rua: property?.endereco.rua,
          numero: property?.endereco.numero,
          complemento: property?.endereco.complemento,
          cidade: property?.endereco.cidade,
          bairro: property?.endereco.bairro,
          uf: property?.endereco.uf,
          cep: property?.endereco.cep,
        },
      },
    };
    console.log(userData);
    console.log(property);
    api.post("/properties", userData).then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <div className="w-screen px-4 py-5 justify-content align-items">
      <form id="IncludeProperty" onSubmit={handleSubmit} method="post" className="flex gap-4">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
          <Label htmlFor="matricula">Matricula</Label>
            <Input
              id="matricula"
              name="matricula"
              type="number"
              value={property.matricula}
              onChange={handleChange}
              placeholder="Valor de avaliação do imóvel"
            />
            <Label htmlFor="valorAvaliacao">Valor Avaliação</Label>
            <Input
              id="valorAvaliacao"
              name="valorAvaliacao"
              type="number"
              value={property.valorAvaliacao}
              onChange={handleChange}
              placeholder="Valor de avaliação do imóvel"
            />
            <Label htmlFor="valorAluguel">Valor Aluguel</Label>
            <Input
              id="valorAluguel"
              name="valorAluguel"
              type="number"
              value={property.valorAluguel}
              onChange={handleChange}
              placeholder="Valor de aluguel do imóvel"
            />

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tipoPropriedade">Tipo da propriedade</Label>
              <Select onValueChange={handleChangeSelect}>
                <SelectTrigger id="tipoPropriedade">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="CASA">CASA</SelectItem>
                  <SelectItem value="APARTAMENTO">APARTAMENTO</SelectItem>
                  <SelectItem value="TERRENO">TERRENO</SelectItem>
                  <SelectItem value="COMERCIAL">COMERCIAL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Label htmlFor="rua">Rua</Label>
            <Input
              id="rua"
              name="rua"
              type="text"
              value={property.endereco.rua}
              onChange={handleChangeEndereco}
              placeholder="Rua do imóvel"
            />
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              name="numero"
              type="number"
              value={property.endereco.numero}
              onChange={handleChangeEndereco}
              placeholder="Número do imóvel"
            />
          </div>
        </div>
        <div className="grid w-full items-center">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="complemento">Complemento</Label>
            <Input
              id="complemento"
              name="complemento"
              type="text"
              value={property.endereco.complemento}
              onChange={handleChangeEndereco}
              placeholder="Complemento do imóvel"
            />

            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              name="cidade"
              type="text"
              value={property.endereco.cidade}
              onChange={handleChangeEndereco}
              placeholder="Cidade do imóvel"
            />
            <Label htmlFor="bairro">Bairro</Label>
            <Input
              id="bairro"
              name="bairro"
              type="text"
              value={property.endereco.bairro}
              onChange={handleChangeEndereco}
              placeholder="Bairro do imóvel"
            />
            <Label htmlFor="uf">UF</Label>
            <Input
              id="uf"
              name="uf"
              type="text"
              value={property.endereco.uf}
              onChange={handleChangeEndereco}
              placeholder="Uf do imóvel"
            />
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              name="cep"
              type="text"
              value={property.endereco.cep}
              onChange={handleChangeEndereco}
              placeholder="Cep do imóvel"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col py-4">
        <Button form="IncludeProperty" type="submit" > Submit </Button>
      </div>
      <Button>
        <Link to="/"> Voltar </Link>
      </Button>
    </div>
  );
}