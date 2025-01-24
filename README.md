# cypress-on-vonsim

---
**English**
```markdown
# Cypress Project - VonSim (Assembler Simulator)

This project includes automated tests developed with **Cypress** for the **VonSim assembler simulator**, which emulates the SX88 architecture based on the Intel 8088 processor.

## Description

VonSim is a simulator designed to execute programs written in assembler language, allowing the visualization of data flow between registers, memory, and input/output devices. The main goal of this project is to automate tests to validate that the programs loaded into the simulator correctly print text on the screen based on virtual keyboard inputs.

### Project Features
- Automatic loading of `.asm` programs into the simulator.
- Simulation of virtual keyboard inputs to interact with the simulator.
- Verification of output on the simulator screen to validate expected behavior.
- Test files are separated by assembler program for efficient maintenance.

## Project Structure

- **`cypress/fixtures/`**: `.asm` files containing assembler programs for testing.
- **`cypress/integration/`**: Cypress automated tests, organized by each assembler program.
- **`cypress/support/`**: Configuration and custom commands to facilitate testing.
- **`README.md`**: Basic project documentation.

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/YourUser/cypress-vonsim.git
   cd cypress-vonsim


**English**
# Proyecto de Cypress - VonSim (Simulador de Ensamblador)

Este proyecto contiene pruebas automatizadas desarrolladas con **Cypress** para el simulador de ensamblador **VonSim**, que emula la arquitectura SX88 basada en el procesador Intel 8088.

## Descripción

VonSim es un simulador diseñado para ejecutar programas escritos en lenguaje ensamblador, permitiendo visualizar el flujo de datos entre los registros, la memoria y los dispositivos de entrada/salida. El objetivo principal de este proyecto es automatizar las pruebas para validar que los programas cargados en el simulador imprimen correctamente un texto en pantalla basado en entradas del teclado virtual.

### Características del Proyecto
- Carga automática de programas `.asm` en el simulador.
- Simulación de entradas del teclado virtual para interactuar con el simulador.
- Verificación de la salida en la pantalla del simulador para validar el comportamiento esperado.
- Separación de archivos de pruebas por programa ensamblador para un mantenimiento eficiente.

## Estructura del Proyecto

- **`cypress/fixtures/`**: Archivos `.asm` que contienen programas ensambladores para probar.
- **`cypress/integration/`**: Pruebas automatizadas en Cypress, organizadas por cada programa ensamblador.
- **`cypress/support/`**: Configuración y comandos personalizados para facilitar las pruebas.
- **`README.md`**: Documentación básica del proyecto.

## Cómo Ejecutar
1. Clona este repositorio:
   ```bash
   git clone https://github.com/TuUsuario/cypress-vonsim.git
   cd cypress-vonsim

