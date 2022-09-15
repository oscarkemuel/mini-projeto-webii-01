class Estudante {
    private primeiroNome: string;
    private ultimoNome: string;
    private curso: string;
    private linguagem: string;
    private sistemasOperacionas: string[];

    public getPrimeiroNome() {
        return this.primeiroNome;
    }
}

export default Estudante;