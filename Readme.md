### Documentação para `equations`

#### Instalação

```bash
npm install equations
```

#### Uso

```typescript
// Importe a biblioteca
import { solveCubicEquation, solveQuadraticEquation } from 'equations';

// Exemplo de uso para equação cúbica
const raizesCubicas = solveCubicEquation(1, -6, 11, -6);
console.log('Raízes Cúbicas:', raizesCubicas);

// Exemplo de uso para equação quadrática
const raizesQuadraticas = solveQuadraticEquation(1, -3, 2);
console.log('Raízes Quadráticas:', raizesQuadraticas);
```

#### Funções

##### `solveCubicEquation(a: number, b: number, c: number, d: number): number[]`

Resolve uma equação cúbica \(ax^3 + bx^2 + cx + d = 0\) e retorna um array com as raízes.

- Parâmetros:
  - `a`: Coeficiente para \(x^3\).
  - `b`: Coeficiente para \(x^2\).
  - `c`: Coeficiente para \(x\).
  - `d`: Termo constante.

- Retorna:
  - Um array contendo as raízes da equação cúbica.

##### `solveQuadraticEquation(a: number, b: number, c: number): number[]`

Resolve uma equação quadrática \(ax^2 + bx + c = 0\) e retorna um array com as raízes.

- Parâmetros:
  - `a`: Coeficiente para \(x^2\).
  - `b`: Coeficiente para \(x\).
  - `c`: Termo constante.

- Retorna:
  - Um array contendo as raízes da equação quadrática.

#### Exemplos

```typescript
const raizesCubicas = solveCubicEquation(1, -6, 11, -6);
console.log('Raízes Cúbicas:', raizesCubicas);

const raizesQuadraticas = solveQuadraticEquation(1, -3, 2);
console.log('Raízes Quadráticas:', raizesQuadraticas);
```

#### Observações

- Certifique-se de fornecer os coeficientes na ordem correta.
- Se não houver raízes reais, um array vazio será retornado.

#### Contribuições

Sinta-se à vontade para contribuir para esta biblioteca enviando problemas (issues) ou solicitações de mesclagem (pull requests) no [repositório do GitHub](https://github.com/seu-usuario/seu-repositorio).

#### Licença

Esta biblioteca é licenciada sob a Licença MIT - consulte o arquivo [LICENSE](https://github.com/seu-usuario/seu-repositorio/blob/main/LICENSE) para obter detalhes.

---

Lembre-se de substituir "seu-usuario" e "seu-repositorio" pelos detalhes específicos do seu repositório no GitHub. Esta documentação é um exemplo básico, e você pode expandi-la conforme necessário para cobrir mais casos de uso, exemplos e detalhes de implementação.