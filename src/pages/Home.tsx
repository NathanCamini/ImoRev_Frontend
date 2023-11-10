import { Link } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

import { CardHouse } from "@/components/ui/cardHouse";

interface Property {
  id: string;
  valorAvaliacao: number;
  valorAluguel: number;
  tipo: string; //////////////////////// TYPEPROPERTY
  links: string[];
  endereco: {
    rua: string;
    numero: number;
    complemento?: string;
    cidade: string;
    bairro: string;
    uf: string;
    cep: string;
  };
}

export function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/properties/getAllProperties")
      .then((res) => setProperties(res.data))
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  return (
    <div className="px-4 py-5 justify-content align-items">
      <h1>Página Inicial</h1>
      <ModeToggle />
      {error && <p className="text-danger">{error}</p>}
      <div className="flex gap-4 py-4 flex-wrap">
      {properties.map((propertie) => {
        return (
          <div key={propertie.id}>
            <CardHouse data={propertie} />
          </div>
        );
      })}
      </div>
      <Button>
        <Link to="property"> Adicionar Propriedade </Link>
      </Button>
    </div>
  );
}
