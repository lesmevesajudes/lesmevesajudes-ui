// @flow
export type RendaId = string;

export type Renda = {
    id: RendaId;
    personaId: string;
    ingressos: number;
    ajudesQueRep: Array<String>;
}