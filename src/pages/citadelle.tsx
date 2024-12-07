import { useCallback, useEffect, useMemo, useState } from "react";

import Layout from "./_layout";
import Link from "next/link";
import {
  AstrologySymbol,
  ElementSymbol,
  FishSymbol,
  HornSymbol,
  JawSymbol,
  RavenSymbol,
  ScorpionSymbol,
} from "../components/citadelleSymbols";

interface Props {}

interface Solution {
  astrology: string;
  element: string;
}

const solutions: { [key: string]: Solution } = {
  jaw: {
    astrology: "leo",
    element: "fire",
  },
  horn: {
    astrology: "leo",
    element: "fire",
  },
  scorpion: {
    astrology: "scorpio",
    element: "water",
  },
  fish: {
    astrology: "pisces",
    element: "water",
  },
  raven: {
    astrology: "gemini",
    element: "air",
  },
};

const artifacts = [
  { name: "Jaw", symbol: JawSymbol },
  { name: "Horn", symbol: HornSymbol },
  { name: "Scorpion", symbol: ScorpionSymbol },
  { name: "Fish", symbol: FishSymbol },
  { name: "Raven", symbol: RavenSymbol },
];

export default function Index(props: Props) {
  const [selectedArtifact, setArtifact] = useState<string>();

  return (
    <Layout
      page_class="flex justify-center"
      page_title="Citadelle Des Morts - Raven Puzzle"
    >
      <div className="font-bold space-y-6">
        <div>
          <h1 className="font-bold text-3xl text-center">
            Citadelle Des Morts
          </h1>
          <h2 className="text-xl text-center">
            Helper for completing the upgrade to the Raven Sword
          </h2>
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <h2 className="text-xl text-center">Select your Artifact/Bone</h2>

          <div className="flex flex-row space-x-3 justify-center">
            {artifacts.map((artifact, idx) => (
              <div
                className={`flex flex-col space-y-2 items-center rounded-md bg-neutral-700 p-2 w-48 hover:brightness-75 cursor-pointer ${selectedArtifact == artifact.name.toLowerCase() ? "brightness-75" : ""}`}
                onClick={() =>
                  setArtifact((current) =>
                    current == artifact.name.toLowerCase()
                      ? ""
                      : artifact.name.toLowerCase(),
                  )
                }
              >
                <span className="flex w-auto h-32">
                  <artifact.symbol key={idx} />
                </span>
                <p className="text-2xl">{artifact.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          {!selectedArtifact ? (
            <p className="text-2xl">Waiting for you to select an artifact</p>
          ) : (
            <div>
              <p className="text-2xl text-center">
                Solution for:{" "}
                {
                  artifacts.find(
                    (art) => art.name.toLowerCase() == selectedArtifact,
                  ).name
                }
              </p>

              <div className="flex flex-row space-x-2">
                <div className="p-4 m-1 rounded-md bg-neutral-700 w-44 text-center">
                  <p className="flex flex-col text-xl">Inner Circle</p>

                  <span className="p-6 text-green-400 flex h-48">
                    <ElementSymbol
                      element={solutions[selectedArtifact].element}
                    />
                  </span>

                  <p className="flex flex-col text-2xl">
                    {solutions[selectedArtifact].element
                      .substring(0, 1)
                      .toUpperCase()}
                    {solutions[selectedArtifact].element.substring(1)}
                  </p>
                </div>

                <div className="p-4 m-1 rounded-md bg-neutral-700 w-44 text-center">
                  <p className="flex flex-col text-xl">Outer Circle</p>

                  <span className="p-6 text-blue-400 flex h-48">
                    <AstrologySymbol
                      element={solutions[selectedArtifact].astrology}
                    />
                  </span>

                  <p className="flex flex-col text-2xl">
                    {solutions[selectedArtifact].astrology
                      .substring(0, 1)
                      .toUpperCase()}
                    {solutions[selectedArtifact].astrology.substring(1)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:text-left">
            <p className="opacity-40">
              Made by{" "}
              <Link
                href="https://dstn.to"
                target="_blank"
                className="underline text-blue-400"
              >
                dstn.to
              </Link>
            </p>
          </div>
          <div className="flex flex-col md:text-right">
            <Link
              href="https://dstn.to/MTEFoBPI"
              target="_blank"
              className="underline text-blue-400"
            >
              Citadelle Des Morts Easter Egg Guide (MrRoflWaffles)
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}