// prettier-ignore
export const navPath = {
  english: {
    main: "/english",
    get words() {return this.main + "/words"},
    word(id: string) {return this.words + `/${id}`},
    get wordCounter() {return this.main + "/word-counter"},
  },
  notes: {
    main: "/notes",
  },
  workout: {
    main: "/workout",
    get training() {return this.main + "/training"},
    get chart() {return this.main + "/chart"},
  },
};

function generateRoutePaths(baseRouts: typeof navPath) {
  const paths = JSON.parse(JSON.stringify(baseRouts));
  removeUnnecessaryPaths(paths);
  return paths;
}

function removeUnnecessaryPaths(paths: { [key: string]: any }) {
  for (const key in paths) {
    let currItem = typeof paths[key as keyof typeof paths];

    if (currItem === "string") {
      let curr = paths[key as keyof typeof paths].match(/[^/]+$/)?.[0];
      paths[key as keyof typeof paths] = curr;
    }

    if (currItem === "object") {
      removeUnnecessaryPaths(paths[key as keyof typeof paths]);
    }
  }
}

export const routes = generateRoutePaths(navPath) as typeof navPath; // prettier-ignore
