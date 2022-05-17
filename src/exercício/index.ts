class VoteApp<T> {
  private options: Array<T> = [];
  private votes: Array<number> = [];

  addOption(option: T): void {
    this.options.push(option);
  }

  vote(option: number): void {
    this.votes.push(option);
  }

  result(): void {
    this.options.map((option, index) => {
      let votes = 0;
      this.votes.map((vote, indexVote) => {
        if (index === indexVote) {
          votes++;
        }
      });

      console.log(option, ' ', votes);
    });
  }
}

class LanguageVote extends VoteApp<string> {}
