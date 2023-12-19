<?php

namespace Database\Seeders;

use App\Helpers\Model;
use App\Models\Job;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    use Model;
    public function run(): void
    {
        foreach($this->jobs() as $job){
            self::setData([
                'name' => $job
            ],Job::class);
        }
    }

    private function jobs(){
        return [
            "Diretor(a)",
            "Coordenador(a) Pedagógico(a)",
            "Professor(a)",
            "Secretário(a) Escolar",
            "Inspetor(a) Escolar",
            "Psicólogo(a) Escolar",
            "Orientador(a) Educacional",
            "Bibliotecário(a)",
            "Nutricionista Escolar",
            "Auxiliar de Serviços Gerais",
            "Merendeira",
            "Motorista de Ônibus Escolar",
            "Técnico(a) de Informática",
            "Enfermeiro(a) Escolar",
            "Zelador(a)",
            "Instrutor(a) de Educação Física",
            "Arquiteto(a) Escolar",
            "Terapeuta Ocupacional",
            "Assistente Social",
            "Tradutor(a) ou Intérprete de Libras",
            "Fonoaudiólogo(a)",
            "Educador(a) Especial",
            "Monitor(a) de Recreação",
            "Coordenador(a) de Eventos Escolares",
            "Especialista em Tecnologia Educacional",
            "Analista de Recursos Humanos",
            "Coordenador(a) de Projetos Educacionais",
            "Instrutor(a) de Artes",
            "Coordenador(a) de Comunicação Escolar",
            "Engenheiro(a) de Infraestrutura Escolar",
            "Supervisor(a) de Alunos",
            "Educomunicador(a)",
            "Especialista em Avaliação Educacional",
            "Conselheiro(a) Escolar",
            "Coordenador(a) de Educação Inclusiva",
            "Consultor(a) Pedagógico(a)",
            "Especialista em Educação Infantil",
            "Coordenador(a) de Educação a Distância",
            "Designer Instrucional",
            "Monitor(a) de Laboratório",
            "Coordenador(a) de Pesquisa Educacional",
            "Gestor(a) de Projetos Educacionais",
            "Instrutor(a) de Robótica Educacional",
            "Coordenador(a) de Orientação Profissional",
            "Analista de Sistemas Educacionais",
            "Coordenador(a) de Intercâmbio Cultural",
            "Instrutor(a) de Línguas Estrangeiras",
            "Especialista em Currículo Escolar",
        ];
    }
}
