"use client";

import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { useMemo, useState } from "react";

interface ReresentanteSchema {
  id: string;
  Marketplace: string;
  Representante: string;
}
export default function Representantes() {
  const [data, setData] = useState("");
  const [repe, setRepe] = useState<ReresentanteSchema[]>([]);
  const representantes: ReresentanteSchema[] = [
    {
      id: "49215",
      Marketplace: "EVOGARDA",
      Representante: "LINE LOBIANCO CARDOSO",
    },
    {
      id: "91038",
      Marketplace: "EVOGARDA",
      Representante: "ANDERSON LOBIANCO CARDOSO",
    },
    {
      id: "27640",
      Marketplace: "ONEWAY",
      Representante: "Ricardo Vidigal",
    },
    {
      id: "53072",
      Marketplace: "Pagsul",
      Representante: "Claudiney Silva Pinto",
    },
    {
      id: "12596",
      Marketplace: "Pagsul",
      Representante: "Elvis Presley dos Santos",
    },
    {
      id: "88417",
      Marketplace: "Paybras",
      Representante: "Cesar Augusto de Sa Silva",
    },
    {
      id: "35109",
      Marketplace: "Paybras",
      Representante: "Diego Trombetta",
    },
    {
      id: "60731",
      Marketplace: "Paybras",
      Representante: "IGOR MICAEL DOS SANTOS",
    },
    {
      id: "19354",
      Marketplace: "Paybras",
      Representante: "Rodrigo Silvestre Sposito",
    },
    {
      id: "74086",
      Marketplace: "SHIELD 2",
      Representante: "Amanda Cangianeli",
    },
    {
      id: "46820",
      Marketplace: "SHIELD 2",
      Representante: "ELIANE LOPES SOARES",
    },
    {
      id: "95143",
      Marketplace: "SHIELD ABC",
      Representante: "ELIANE LOPES SOARES",
    },
    {
      id: "23791",
      Marketplace: "SHIELD ABC",
      Representante: "FELIPE RESENDE COELHO",
    },
    {
      id: "58064",
      Marketplace: "SHIELD ABC",
      Representante: "Orlando Lankoski Junior",
    },
    {
      id: "10982",
      Marketplace: "SHIELD ANALIA FRANCO",
      Representante: "MAX EDUARDO CORREA",
    },
    {
      id: "85370",
      Marketplace: "Shield BETIM",
      Representante: "Hugo Leonardo De Abreu",
    },
    {
      id: "32451",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "Alessandra do Espírito Santo Nobre",
    },
    {
      id: "69174",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "AMANDA JESSICA PEREIRA DOS SANTOS",
    },
    {
      id: "16805",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "EDUARDO LOPES DE CARVALHO PREGAL",
    },
    {
      id: "72949",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "Fernanda Rafaella Lopes e Silva",
    },
    {
      id: "43567",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "GESSIANE DA SILVA PESSOA",
    },
    {
      id: "98201",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "GUSTAVO DIAS SAVOIA",
    },
    {
      id: "25439",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "Jacion de Siqueira Costa",
    },
    {
      id: "51093",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "JADSON CARVALHO LINO",
    },
    {
      id: "18726",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "LUCIANA DE MOURA SOARES",
    },
    {
      id: "83150",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "MASASHI HIROSHIMA",
    },
    {
      id: "39472",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "PERICLES COUTO BAHIA GOMES",
    },
    {
      id: "64703",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "RENATA GOMES PAIVA DA CRUZ",
    },
    {
      id: "11984",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "RENATO ALVES PEREIRA DA CRUZ",
    },
    {
      id: "78257",
      Marketplace: "SHIELD BRASÍLIA",
      Representante: "VALDIR BORGES DOS SANTOS",
    },
    {
      id: "40561",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Ana Paula Assuncao da Silva",
    },
    {
      id: "96735",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "BRUNO GUSTAVO DELAZZARI",
    },
    {
      id: "22380",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Carlos Alberto de Carvalho Gomes Junior",
    },
    {
      id: "57914",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "CARLOS EDUARDO ROSSI",
    },
    {
      id: "14058",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Estevão Pires de Almeida Genebra",
    },
    {
      id: "80327",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "JOSÉ ROGÉRIO SCHWAN",
    },
    {
      id: "37491",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Natália de Mello Braga",
    },
    {
      id: "62905",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "NATHALY SILVA DANTAS",
    },
    {
      id: "15678",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Rafael Sais Crotti",
    },
    {
      id: "71342",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "Roberto Willens Ribeiro",
    },
    {
      id: "48906",
      Marketplace: "SHIELD CONGONHAS",
      Representante: "VICTOR CARLOS VERAS GARCIA",
    },
    {
      id: "94129",
      Marketplace: "SHIELD EV PLUS",
      Representante: "Thiago Duarte Lopes",
    },
    {
      id: "20763",
      Marketplace: "SHIELD FLORIANOPOLIS",
      Representante: "Victor Hugo Machado",
    },
    {
      id: "56307",
      Marketplace: "SHIELD HORTOLANDIA 2",
      Representante: "ALEXANDRE MOTTINHA MACEDO",
    },
    {
      id: "13540",
      Marketplace: "SHIELD HORTOLANDIA 2",
      Representante: "ANTONIO EDSON DE FARIAS",
    },
    {
      id: "81029",
      Marketplace: "SHIELD HORTOLANDIA 2",
      Representante: "FÁBIO LUCIANO SORG",
    },
    {
      id: "38694",
      Marketplace: "SHIELD HORTOLANDIA 2",
      Representante: "LUCAS PAIVA ZANI",
    },
    {
      id: "65248",
      Marketplace: "SHIELD HORTOLANDIA 2",
      Representante: "LUCIO FABIANO SORG",
    },
    {
      id: "17901",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Amanda Cangianeli",
    },
    {
      id: "73456",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Amanda Silva do Nascimento",
    },
    {
      id: "44182",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Bruno Romano Bernardes",
    },
    {
      id: "99015",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Diego Trombetta",
    },
    {
      id: "28379",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "ELIANE LOPES SOARES",
    },
    {
      id: "54690",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "FABIO DONISETE FERNANDES LIVRAMENTO",
    },
    {
      id: "11234",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "FABIO GOMES NASCIMENTO",
    },
    {
      id: "86971",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Flávio de Paula Braz",
    },
    {
      id: "33852",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "FLAVIO JOSE FERNANDES RIBEIRO",
    },
    {
      id: "67046",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Hugo Leonardo De Abreu",
    },
    {
      id: "15930",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "James Rodrigues",
    },
    {
      id: "70183",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Maks Sérgio Ricieri Nunes",
    },
    {
      id: "41757",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "MARIANNE ARAUJO TEIXEIRA",
    },
    {
      id: "97864",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "MICHELE FERNANDA DA SILVA PRATES AMARAL",
    },
    {
      id: "24598",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "Raissa de Paula Vitor",
    },
    {
      id: "50812",
      Marketplace: "SHIELD INSTITUICAO DE PAGAMENTOS S A",
      Representante: "RICARDO SHIMOHIRAO",
    },
    {
      id: "19465",
      Marketplace: "SHIELD ITAPEMA",
      Representante: "BIANCA BATISTA VALLE",
    },
    {
      id: "82739",
      Marketplace: "SHIELD ITAPEMA",
      Representante: "CHARLINI MAIARA PUEL BOSO",
    },
    {
      id: "34910",
      Marketplace: "SHIELD MORUMBI",
      Representante: "CLAUDIO ALEX SANTOS ALEXANDRE",
    },
    {
      id: "68404",
      Marketplace: "SHIELD MORUMBI",
      Representante: "ROSILANE LIMA RUSSI PAULUCCI",
    },
    {
      id: "13175",
      Marketplace: "Shield One Pay",
      Representante: "MARIANNE ARAUJO TEIXEIRA",
    },
    {
      id: "77698",
      Marketplace: "Shield One Pay",
      Representante: "MARIANNE TEIXEIRA",
    },
    {
      id: "45321",
      Marketplace: "Shield One Pay",
      Representante: "Nathaly Da Silva Dantas",
    },
    {
      id: "90547",
      Marketplace: "Shield One Pay",
      Representante: "Wiliam Bezerra Segundo",
    },
    {
      id: "29876",
      Marketplace: "SHIELD OSASCO",
      Representante: "RODRIGO TADEU GONÇALVES MATTOS",
    },
    {
      id: "55109",
      Marketplace: "SHIELD RIO DE JANEIRO",
      Representante: "ELIANE LOPES SOARES",
    },
    {
      id: "12843",
      Marketplace: "SHIELD RIO DE JANEIRO",
      Representante: "FLAVIO JOSE FERNANDES RIBEIRO",
    },
    {
      id: "87456",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "André Luiz dos Santos Cavalcante",
    },
    {
      id: "36021",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "Benedito Flavio Silva Boa",
    },
    {
      id: "61589",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "Jose Paulo de Jesus Filho",
    },
    {
      id: "14732",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "JOSÉ PAULO ZAUZA",
    },
    {
      id: "79015",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "Paulo César Gobira Guimarães",
    },
    {
      id: "47268",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "Robson Marquardt",
    },
    {
      id: "93541",
      Marketplace: "SHIELD SANTANA SP",
      Representante: "RONALDO MARCELO JUNQUEIRA",
    },
    {
      id: "20973",
      Marketplace: "SHIELD SC 2",
      Representante: "ALEXANDRE BARROS",
    },
    {
      id: "56487",
      Marketplace: "SHIELD SC 2",
      Representante: "CARLOS ALBERTO DA SILVA VENTURINI",
    },
    {
      id: "13601",
      Marketplace: "SHIELD SC 2",
      Representante: "CLAUCIA GAUZISKI PEYERL",
    },
    {
      id: "80524",
      Marketplace: "SHIELD SC 2",
      Representante: "DAIANA CRISTINA DE LIMA",
    },
    {
      id: "37895",
      Marketplace: "SHIELD SC 2",
      Representante: "RAMON SILVA NASCIMENTO",
    },
    {
      id: "63120",
      Marketplace: "SHIELD SC 2",
      Representante: "TIAGO SANTIS DE AVILA",
    },
    {
      id: "16398",
      Marketplace: "SHIELD SCD",
      Representante: "BRUNO DE CARVALHO CABRAL",
    },
    {
      id: "75042",
      Marketplace: "SHIELD SCD",
      Representante: "CLAUDINO ANTONIO JUNIOR",
    },
    {
      id: "42750",
      Marketplace: "SHIELD SCD",
      Representante: "ELIANE EVALDT SELAO LOPES",
    },
    {
      id: "98614",
      Marketplace: "SHIELD SCD",
      Representante: "FRANCIELE CRISTINA CRONE",
    },
    {
      id: "21405",
      Marketplace: "SHIELD SCD",
      Representante: "HIGOR AUGUSTO LUCINI MESSIAS",
    },
    {
      id: "57239",
      Marketplace: "SHIELD SCD",
      Representante: "IVANILDE BIONDARO DA SILVA",
    },
    {
      id: "14896",
      Marketplace: "SHIELD SCD",
      Representante: "JULIANA MARCELINO MACHADO",
    },
    {
      id: "81603",
      Marketplace: "SHIELD SCD",
      Representante: "KETLYN FRANCIANE MENEZES GIESE",
    },
    {
      id: "38927",
      Marketplace: "SHIELD SCD",
      Representante: "LINCOLN ZANELLA GOMES",
    },
    {
      id: "64351",
      Marketplace: "SHIELD SCD",
      Representante: "MATHEUS FILLIPE PEREIRA RODRIGUES",
    },
    {
      id: "17208",
      Marketplace: "SHIELD SCD",
      Representante: "NICOLAS MATHEUS FELIX CONING",
    },
    {
      id: "73846",
      Marketplace: "SHIELD SCD",
      Representante: "PAULO SERGIO SEMPKOSKI",
    },
    {
      id: "49019",
      Marketplace: "SHIELD SCD",
      Representante: "THIARA MELINA DE ABREU ESMERALDINO",
    },
    {
      id: "95782",
      Marketplace: "SHIELD SCD",
      Representante: "VICTOR EMANOELL GONDIM DE MELO",
    },
    {
      id: "26430",
      Marketplace: "SHIELD SCD",
      Representante: "WELLINGTON EDUARDO JUNGLES DA SILVA",
    },
    {
      id: "52874",
      Marketplace: "SHIELD SEALBA",
      Representante: "Aline de Jesus Barreto",
    },
    {
      id: "10567",
      Marketplace: "SHIELD SEALBA",
      Representante: "JOSE FRANCISCO DOS SANTOS NETO",
    },
    {
      id: "86012",
      Marketplace: "SHIELD SUDESTE",
      Representante: "ALAN SANTOS DE LANA",
    },
    {
      id: "32745",
      Marketplace: "SHIELD SUDESTE",
      Representante: "ALLAN PATRICK VARGAS MAFRA",
    },
    {
      id: "69830",
      Marketplace: "SHIELD SUDESTE",
      Representante: "DENIS DOS SANTOS NASCIMENTO",
    },
    {
      id: "18593",
      Marketplace: "SHIELD ZONA LESTE",
      Representante: "Maria Isabel Salviati Camargo",
    },
    {
      id: "74206",
      Marketplace: "SHIELD ZS",
      Representante: "ALEXANDRE ANDRADE FARIA",
    },
    {
      id: "41938",
      Marketplace: "SHIELD ZS",
      Representante: "ANA PATRICIA SILVA",
    },
    {
      id: "97054",
      Marketplace: "SHIELD ZS",
      Representante: "ANDERSON LUCIANO LIMA",
    },
    {
      id: "23589",
      Marketplace: "SHIELD ZS",
      Representante: "ANDREA MARTINS MOURA",
    },
    {
      id: "58316",
      Marketplace: "SHIELD ZS",
      Representante: "CARLOS ALBERTO DA SILVA BRAGA",
    },
    {
      id: "10740",
      Marketplace: "SHIELD ZS",
      Representante: "CARLOS FERRERIA NOBRE",
    },
    {
      id: "85163",
      Marketplace: "SHIELD ZS",
      Representante: "EWERTON ADEMIR DE OLIVEIRA MONTEIRO",
    },
    {
      id: "31495",
      Marketplace: "SHIELD ZS",
      Representante: "FELIPE EDUARDO DE MATOS GODOI",
    },
    {
      id: "66907",
      Marketplace: "SHIELD ZS",
      Representante: "FERNANDA DOS SANTOS GOMES",
    },
    {
      id: "14472",
      Marketplace: "SHIELD ZS",
      Representante: "LEONARDO SILVA LEANDRO",
    },
    {
      id: "78025",
      Marketplace: "SHIELD ZS",
      Representante: "PAULO JOSE CAIVANO RODRIGUES",
    },
    {
      id: "40319",
      Marketplace: "SHIELD ZS",
      Representante: "RAIMUNDO NONATO SOEIRO CONDE",
    },
    {
      id: "96581",
      Marketplace: "Triboo",
      Representante: "Jair Ricardo Freire",
    },
  ];

  useMemo(() => {
    setRepe(representantes.filter((e) => e.id === data));
  }, [data]);

  return (
  <>
    <Header />

    <div className="w-full min-h-screen bg-amber-50 px-4 pt-32 pb-12 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto">

        <h1 className="tracking-[-0.02em] text-black leading-[1.1] font-light text-7xl max-sm:text-4xl text-center sm:text-left">
          Representantes <br />
          <strong className="text-[#CCAA76]">Shield Bank</strong>
        </h1>

        <p className="mt-8 text-xl max-sm:text-base text-black font-light tracking-wide leading-relaxed text-center sm:text-left">
          Insira o código exclusivo fornecido pelo parceiro no campo abaixo.
          Nossa plataforma verificará instantaneamente a validade da parceria
          e exibirá seu status atual.
        </p>

        <input
          className="border border-slate-950 text-black w-full p-4 rounded-xl mt-8 focus:outline-none focus:ring-1 focus:ring-[#CCAA76]"
          placeholder="Insira o ID do parceiro"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />

        {repe && repe.length > 0 && (
          <>
            <div className="hidden sm:block mt-12 overflow-x-auto">
              <Table className="w-full">
                <TableCaption className="mt-4 text-sm text-gray-600">
                  Parceiros ShieldBank © 2025
                </TableCaption>

                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg text-black font-normal">
                      Representante
                    </TableHead>
                    <TableHead className="text-lg text-black font-normal">
                      Marketplace
                    </TableHead>
                    <TableHead className="text-lg text-black font-normal">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {repe.map((e) => (
                    <TableRow key={e.id}>
                      <TableCell className="text-black">
                        {e.Representante}
                      </TableCell>
                      <TableCell className="text-black">
                        {e.Marketplace}
                      </TableCell>
                      <TableCell className="text-green-600 font-medium">
                        Ativo
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="sm:hidden mt-10 space-y-4">
              {repe.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-2xl p-5 shadow-md border border-gray-200"
                >
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 uppercase">
                      Representante
                    </span>
                    <p className="text-black font-medium">
                      {e.Representante}
                    </p>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs text-gray-500 uppercase">
                      Marketplace
                    </span>
                    <p className="text-black font-medium">
                      {e.Marketplace}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-500 uppercase">
                      Status
                    </span>
                    <p className="text-green-600 font-semibold">
                      Ativo
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>

    <Footer />
  </>
);

}
