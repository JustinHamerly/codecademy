// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna){
  return {
    specimenNum,
    dna,

    mutate(){
      const dnaPos = Math.floor(Math.random() * this.dna.length);
      const origBase = this.dna[dnaPos];
      let newBase = origBase;
      while (newBase === origBase){
        newBase = returnRandBase();
      }
      this.dna[dnaPos] = newBase;
    },

  }
}
