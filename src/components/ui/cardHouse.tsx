import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export function CardHouse(data: any) {
  const { valorAvaliacao, valorAluguel, tipo, links, proprietario, id } = data.data;

  return (
    <Card className="w-full">
        <a
          href={`property/${id}`}
          className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-4"
        >
          <div className="rounded-lg shadow">
            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-105">
                <div className="absolute inset-0 bg-black bg-opacity-80">
                  <img
                    src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-5 mb-3 flex">
                <p className="flex items-center font-medium text-gray-800">
                  <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                </p>
              </div>

              <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm px-2 py-1 text-xs font-semibold">
                <Badge>{tipo}</Badge>
              </span>
            </div>

            <div className="mt-4 p-4">
              <h2 className=" text-2xl font-medium md:text-lg" title="New York">
                Valor da Avaliação: R$
                {valorAvaliacao}
              </h2>
              <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                <span className="text-2xl">
                  Valor do Aluguel: R${valorAluguel}
                </span>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2">
              <div className="flex items-center p-4">
                <Avatar>
                  <AvatarImage src={proprietario.imagem_link} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p className="line-clamp-1 ml-2">{proprietario.nome_completo}</p>
              </div>
            </div>
          </div>
        </a>
    </Card>
  );
}
