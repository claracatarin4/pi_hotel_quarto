
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipoQuarto
 * 
 */
export type TipoQuarto = $Result.DefaultSelection<Prisma.$TipoQuartoPayload>
/**
 * Model Quarto
 * 
 */
export type Quarto = $Result.DefaultSelection<Prisma.$QuartoPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoQuartos
 * const tipoQuartos = await prisma.tipoQuarto.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TipoQuartos
   * const tipoQuartos = await prisma.tipoQuarto.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tipoQuarto`: Exposes CRUD operations for the **TipoQuarto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoQuartos
    * const tipoQuartos = await prisma.tipoQuarto.findMany()
    * ```
    */
  get tipoQuarto(): Prisma.TipoQuartoDelegate<ExtArgs>;

  /**
   * `prisma.quarto`: Exposes CRUD operations for the **Quarto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quartos
    * const quartos = await prisma.quarto.findMany()
    * ```
    */
  get quarto(): Prisma.QuartoDelegate<ExtArgs>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TipoQuarto: 'TipoQuarto',
    Quarto: 'Quarto',
    Foto: 'Foto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tipoQuarto" | "quarto" | "foto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoQuarto: {
        payload: Prisma.$TipoQuartoPayload<ExtArgs>
        fields: Prisma.TipoQuartoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoQuartoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoQuartoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          findFirst: {
            args: Prisma.TipoQuartoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoQuartoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          findMany: {
            args: Prisma.TipoQuartoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>[]
          }
          create: {
            args: Prisma.TipoQuartoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          createMany: {
            args: Prisma.TipoQuartoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoQuartoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          update: {
            args: Prisma.TipoQuartoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          deleteMany: {
            args: Prisma.TipoQuartoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoQuartoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoQuartoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          aggregate: {
            args: Prisma.TipoQuartoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoQuarto>
          }
          groupBy: {
            args: Prisma.TipoQuartoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoQuartoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoQuartoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoQuartoCountAggregateOutputType> | number
          }
        }
      }
      Quarto: {
        payload: Prisma.$QuartoPayload<ExtArgs>
        fields: Prisma.QuartoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuartoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuartoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findFirst: {
            args: Prisma.QuartoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuartoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findMany: {
            args: Prisma.QuartoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>[]
          }
          create: {
            args: Prisma.QuartoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          createMany: {
            args: Prisma.QuartoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuartoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          update: {
            args: Prisma.QuartoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          deleteMany: {
            args: Prisma.QuartoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuartoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuartoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          aggregate: {
            args: Prisma.QuartoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuarto>
          }
          groupBy: {
            args: Prisma.QuartoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuartoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuartoCountArgs<ExtArgs>
            result: $Utils.Optional<QuartoCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoQuartoCountOutputType
   */

  export type TipoQuartoCountOutputType = {
    quartos: number
  }

  export type TipoQuartoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | TipoQuartoCountOutputTypeCountQuartosArgs
  }

  // Custom InputTypes
  /**
   * TipoQuartoCountOutputType without action
   */
  export type TipoQuartoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuartoCountOutputType
     */
    select?: TipoQuartoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoQuartoCountOutputType without action
   */
  export type TipoQuartoCountOutputTypeCountQuartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoWhereInput
  }


  /**
   * Count Type QuartoCountOutputType
   */

  export type QuartoCountOutputType = {
    fotos: number
  }

  export type QuartoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | QuartoCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCountOutputType
     */
    select?: QuartoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoQuarto
   */

  export type AggregateTipoQuarto = {
    _count: TipoQuartoCountAggregateOutputType | null
    _avg: TipoQuartoAvgAggregateOutputType | null
    _sum: TipoQuartoSumAggregateOutputType | null
    _min: TipoQuartoMinAggregateOutputType | null
    _max: TipoQuartoMaxAggregateOutputType | null
  }

  export type TipoQuartoAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type TipoQuartoSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type TipoQuartoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoQuartoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoQuartoCountAggregateOutputType = {
    id: number
    descricao: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoQuartoAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type TipoQuartoSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type TipoQuartoMinAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoQuartoMaxAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoQuartoCountAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoQuartoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoQuarto to aggregate.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoQuartos
    **/
    _count?: true | TipoQuartoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoQuartoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoQuartoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoQuartoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoQuartoMaxAggregateInputType
  }

  export type GetTipoQuartoAggregateType<T extends TipoQuartoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoQuarto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoQuarto[P]>
      : GetScalarType<T[P], AggregateTipoQuarto[P]>
  }




  export type TipoQuartoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoQuartoWhereInput
    orderBy?: TipoQuartoOrderByWithAggregationInput | TipoQuartoOrderByWithAggregationInput[]
    by: TipoQuartoScalarFieldEnum[] | TipoQuartoScalarFieldEnum
    having?: TipoQuartoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoQuartoCountAggregateInputType | true
    _avg?: TipoQuartoAvgAggregateInputType
    _sum?: TipoQuartoSumAggregateInputType
    _min?: TipoQuartoMinAggregateInputType
    _max?: TipoQuartoMaxAggregateInputType
  }

  export type TipoQuartoGroupByOutputType = {
    id: number
    descricao: string
    status: number
    createdAt: Date
    updatedAt: Date
    _count: TipoQuartoCountAggregateOutputType | null
    _avg: TipoQuartoAvgAggregateOutputType | null
    _sum: TipoQuartoSumAggregateOutputType | null
    _min: TipoQuartoMinAggregateOutputType | null
    _max: TipoQuartoMaxAggregateOutputType | null
  }

  type GetTipoQuartoGroupByPayload<T extends TipoQuartoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoQuartoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoQuartoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoQuartoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoQuartoGroupByOutputType[P]>
        }
      >
    >


  export type TipoQuartoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quartos?: boolean | TipoQuarto$quartosArgs<ExtArgs>
    _count?: boolean | TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoQuarto"]>


  export type TipoQuartoSelectScalar = {
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoQuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | TipoQuarto$quartosArgs<ExtArgs>
    _count?: boolean | TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoQuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoQuarto"
    objects: {
      quartos: Prisma.$QuartoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoQuarto"]>
    composites: {}
  }

  type TipoQuartoGetPayload<S extends boolean | null | undefined | TipoQuartoDefaultArgs> = $Result.GetResult<Prisma.$TipoQuartoPayload, S>

  type TipoQuartoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipoQuartoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TipoQuartoCountAggregateInputType | true
    }

  export interface TipoQuartoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoQuarto'], meta: { name: 'TipoQuarto' } }
    /**
     * Find zero or one TipoQuarto that matches the filter.
     * @param {TipoQuartoFindUniqueArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoQuartoFindUniqueArgs>(args: SelectSubset<T, TipoQuartoFindUniqueArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TipoQuarto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TipoQuartoFindUniqueOrThrowArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoQuartoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoQuartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TipoQuarto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindFirstArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoQuartoFindFirstArgs>(args?: SelectSubset<T, TipoQuartoFindFirstArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TipoQuarto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindFirstOrThrowArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoQuartoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoQuartoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TipoQuartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoQuartos
     * const tipoQuartos = await prisma.tipoQuarto.findMany()
     * 
     * // Get first 10 TipoQuartos
     * const tipoQuartos = await prisma.tipoQuarto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoQuartoWithIdOnly = await prisma.tipoQuarto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoQuartoFindManyArgs>(args?: SelectSubset<T, TipoQuartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TipoQuarto.
     * @param {TipoQuartoCreateArgs} args - Arguments to create a TipoQuarto.
     * @example
     * // Create one TipoQuarto
     * const TipoQuarto = await prisma.tipoQuarto.create({
     *   data: {
     *     // ... data to create a TipoQuarto
     *   }
     * })
     * 
     */
    create<T extends TipoQuartoCreateArgs>(args: SelectSubset<T, TipoQuartoCreateArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TipoQuartos.
     * @param {TipoQuartoCreateManyArgs} args - Arguments to create many TipoQuartos.
     * @example
     * // Create many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoQuartoCreateManyArgs>(args?: SelectSubset<T, TipoQuartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoQuarto.
     * @param {TipoQuartoDeleteArgs} args - Arguments to delete one TipoQuarto.
     * @example
     * // Delete one TipoQuarto
     * const TipoQuarto = await prisma.tipoQuarto.delete({
     *   where: {
     *     // ... filter to delete one TipoQuarto
     *   }
     * })
     * 
     */
    delete<T extends TipoQuartoDeleteArgs>(args: SelectSubset<T, TipoQuartoDeleteArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TipoQuarto.
     * @param {TipoQuartoUpdateArgs} args - Arguments to update one TipoQuarto.
     * @example
     * // Update one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoQuartoUpdateArgs>(args: SelectSubset<T, TipoQuartoUpdateArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TipoQuartos.
     * @param {TipoQuartoDeleteManyArgs} args - Arguments to filter TipoQuartos to delete.
     * @example
     * // Delete a few TipoQuartos
     * const { count } = await prisma.tipoQuarto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoQuartoDeleteManyArgs>(args?: SelectSubset<T, TipoQuartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoQuartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoQuartoUpdateManyArgs>(args: SelectSubset<T, TipoQuartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoQuarto.
     * @param {TipoQuartoUpsertArgs} args - Arguments to update or create a TipoQuarto.
     * @example
     * // Update or create a TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.upsert({
     *   create: {
     *     // ... data to create a TipoQuarto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoQuarto we want to update
     *   }
     * })
     */
    upsert<T extends TipoQuartoUpsertArgs>(args: SelectSubset<T, TipoQuartoUpsertArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TipoQuartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoCountArgs} args - Arguments to filter TipoQuartos to count.
     * @example
     * // Count the number of TipoQuartos
     * const count = await prisma.tipoQuarto.count({
     *   where: {
     *     // ... the filter for the TipoQuartos we want to count
     *   }
     * })
    **/
    count<T extends TipoQuartoCountArgs>(
      args?: Subset<T, TipoQuartoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoQuartoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoQuarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoQuartoAggregateArgs>(args: Subset<T, TipoQuartoAggregateArgs>): Prisma.PrismaPromise<GetTipoQuartoAggregateType<T>>

    /**
     * Group by TipoQuarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoQuartoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoQuartoGroupByArgs['orderBy'] }
        : { orderBy?: TipoQuartoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoQuartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoQuartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoQuarto model
   */
  readonly fields: TipoQuartoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoQuarto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoQuartoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quartos<T extends TipoQuarto$quartosArgs<ExtArgs> = {}>(args?: Subset<T, TipoQuarto$quartosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoQuarto model
   */ 
  interface TipoQuartoFieldRefs {
    readonly id: FieldRef<"TipoQuarto", 'Int'>
    readonly descricao: FieldRef<"TipoQuarto", 'String'>
    readonly status: FieldRef<"TipoQuarto", 'Int'>
    readonly createdAt: FieldRef<"TipoQuarto", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoQuarto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoQuarto findUnique
   */
  export type TipoQuartoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto findUniqueOrThrow
   */
  export type TipoQuartoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto findFirst
   */
  export type TipoQuartoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoQuartos.
     */
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto findFirstOrThrow
   */
  export type TipoQuartoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoQuartos.
     */
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto findMany
   */
  export type TipoQuartoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuartos to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto create
   */
  export type TipoQuartoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoQuarto.
     */
    data: XOR<TipoQuartoCreateInput, TipoQuartoUncheckedCreateInput>
  }

  /**
   * TipoQuarto createMany
   */
  export type TipoQuartoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoQuartos.
     */
    data: TipoQuartoCreateManyInput | TipoQuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoQuarto update
   */
  export type TipoQuartoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoQuarto.
     */
    data: XOR<TipoQuartoUpdateInput, TipoQuartoUncheckedUpdateInput>
    /**
     * Choose, which TipoQuarto to update.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto updateMany
   */
  export type TipoQuartoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoQuartos.
     */
    data: XOR<TipoQuartoUpdateManyMutationInput, TipoQuartoUncheckedUpdateManyInput>
    /**
     * Filter which TipoQuartos to update
     */
    where?: TipoQuartoWhereInput
  }

  /**
   * TipoQuarto upsert
   */
  export type TipoQuartoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoQuarto to update in case it exists.
     */
    where: TipoQuartoWhereUniqueInput
    /**
     * In case the TipoQuarto found by the `where` argument doesn't exist, create a new TipoQuarto with this data.
     */
    create: XOR<TipoQuartoCreateInput, TipoQuartoUncheckedCreateInput>
    /**
     * In case the TipoQuarto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoQuartoUpdateInput, TipoQuartoUncheckedUpdateInput>
  }

  /**
   * TipoQuarto delete
   */
  export type TipoQuartoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter which TipoQuarto to delete.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto deleteMany
   */
  export type TipoQuartoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoQuartos to delete
     */
    where?: TipoQuartoWhereInput
  }

  /**
   * TipoQuarto.quartos
   */
  export type TipoQuarto$quartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    where?: QuartoWhereInput
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    cursor?: QuartoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto without action
   */
  export type TipoQuartoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
  }


  /**
   * Model Quarto
   */

  export type AggregateQuarto = {
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  export type QuartoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    status: number | null
    tipoQuartoId: number | null
  }

  export type QuartoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    status: number | null
    tipoQuartoId: number | null
  }

  export type QuartoMinAggregateOutputType = {
    id: number | null
    numero: string | null
    preco: number | null
    status: number | null
    tipoQuartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    preco: number | null
    status: number | null
    tipoQuartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuartoCountAggregateOutputType = {
    id: number
    numero: number
    preco: number
    status: number
    tipoQuartoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuartoAvgAggregateInputType = {
    id?: true
    preco?: true
    status?: true
    tipoQuartoId?: true
  }

  export type QuartoSumAggregateInputType = {
    id?: true
    preco?: true
    status?: true
    tipoQuartoId?: true
  }

  export type QuartoMinAggregateInputType = {
    id?: true
    numero?: true
    preco?: true
    status?: true
    tipoQuartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoMaxAggregateInputType = {
    id?: true
    numero?: true
    preco?: true
    status?: true
    tipoQuartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuartoCountAggregateInputType = {
    id?: true
    numero?: true
    preco?: true
    status?: true
    tipoQuartoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuartoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quarto to aggregate.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quartos
    **/
    _count?: true | QuartoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuartoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuartoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuartoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuartoMaxAggregateInputType
  }

  export type GetQuartoAggregateType<T extends QuartoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuarto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuarto[P]>
      : GetScalarType<T[P], AggregateQuarto[P]>
  }




  export type QuartoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoWhereInput
    orderBy?: QuartoOrderByWithAggregationInput | QuartoOrderByWithAggregationInput[]
    by: QuartoScalarFieldEnum[] | QuartoScalarFieldEnum
    having?: QuartoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuartoCountAggregateInputType | true
    _avg?: QuartoAvgAggregateInputType
    _sum?: QuartoSumAggregateInputType
    _min?: QuartoMinAggregateInputType
    _max?: QuartoMaxAggregateInputType
  }

  export type QuartoGroupByOutputType = {
    id: number
    numero: string
    preco: number
    status: number
    tipoQuartoId: number
    createdAt: Date
    updatedAt: Date
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  type GetQuartoGroupByPayload<T extends QuartoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuartoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuartoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuartoGroupByOutputType[P]>
            : GetScalarType<T[P], QuartoGroupByOutputType[P]>
        }
      >
    >


  export type QuartoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    preco?: boolean
    status?: boolean
    tipoQuartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipoQuarto?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    fotos?: boolean | Quarto$fotosArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>


  export type QuartoSelectScalar = {
    id?: boolean
    numero?: boolean
    preco?: boolean
    status?: boolean
    tipoQuartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoQuarto?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    fotos?: boolean | Quarto$fotosArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quarto"
    objects: {
      tipoQuarto: Prisma.$TipoQuartoPayload<ExtArgs>
      fotos: Prisma.$FotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      preco: number
      status: number
      tipoQuartoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quarto"]>
    composites: {}
  }

  type QuartoGetPayload<S extends boolean | null | undefined | QuartoDefaultArgs> = $Result.GetResult<Prisma.$QuartoPayload, S>

  type QuartoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuartoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuartoCountAggregateInputType | true
    }

  export interface QuartoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quarto'], meta: { name: 'Quarto' } }
    /**
     * Find zero or one Quarto that matches the filter.
     * @param {QuartoFindUniqueArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuartoFindUniqueArgs>(args: SelectSubset<T, QuartoFindUniqueArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quarto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuartoFindUniqueOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuartoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quarto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuartoFindFirstArgs>(args?: SelectSubset<T, QuartoFindFirstArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quarto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuartoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuartoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quartos
     * const quartos = await prisma.quarto.findMany()
     * 
     * // Get first 10 Quartos
     * const quartos = await prisma.quarto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quartoWithIdOnly = await prisma.quarto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuartoFindManyArgs>(args?: SelectSubset<T, QuartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quarto.
     * @param {QuartoCreateArgs} args - Arguments to create a Quarto.
     * @example
     * // Create one Quarto
     * const Quarto = await prisma.quarto.create({
     *   data: {
     *     // ... data to create a Quarto
     *   }
     * })
     * 
     */
    create<T extends QuartoCreateArgs>(args: SelectSubset<T, QuartoCreateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quartos.
     * @param {QuartoCreateManyArgs} args - Arguments to create many Quartos.
     * @example
     * // Create many Quartos
     * const quarto = await prisma.quarto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuartoCreateManyArgs>(args?: SelectSubset<T, QuartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quarto.
     * @param {QuartoDeleteArgs} args - Arguments to delete one Quarto.
     * @example
     * // Delete one Quarto
     * const Quarto = await prisma.quarto.delete({
     *   where: {
     *     // ... filter to delete one Quarto
     *   }
     * })
     * 
     */
    delete<T extends QuartoDeleteArgs>(args: SelectSubset<T, QuartoDeleteArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quarto.
     * @param {QuartoUpdateArgs} args - Arguments to update one Quarto.
     * @example
     * // Update one Quarto
     * const quarto = await prisma.quarto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuartoUpdateArgs>(args: SelectSubset<T, QuartoUpdateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quartos.
     * @param {QuartoDeleteManyArgs} args - Arguments to filter Quartos to delete.
     * @example
     * // Delete a few Quartos
     * const { count } = await prisma.quarto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuartoDeleteManyArgs>(args?: SelectSubset<T, QuartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quartos
     * const quarto = await prisma.quarto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuartoUpdateManyArgs>(args: SelectSubset<T, QuartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quarto.
     * @param {QuartoUpsertArgs} args - Arguments to update or create a Quarto.
     * @example
     * // Update or create a Quarto
     * const quarto = await prisma.quarto.upsert({
     *   create: {
     *     // ... data to create a Quarto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quarto we want to update
     *   }
     * })
     */
    upsert<T extends QuartoUpsertArgs>(args: SelectSubset<T, QuartoUpsertArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCountArgs} args - Arguments to filter Quartos to count.
     * @example
     * // Count the number of Quartos
     * const count = await prisma.quarto.count({
     *   where: {
     *     // ... the filter for the Quartos we want to count
     *   }
     * })
    **/
    count<T extends QuartoCountArgs>(
      args?: Subset<T, QuartoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuartoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuartoAggregateArgs>(args: Subset<T, QuartoAggregateArgs>): Prisma.PrismaPromise<GetQuartoAggregateType<T>>

    /**
     * Group by Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuartoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuartoGroupByArgs['orderBy'] }
        : { orderBy?: QuartoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quarto model
   */
  readonly fields: QuartoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quarto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuartoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoQuarto<T extends TipoQuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoQuartoDefaultArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fotos<T extends Quarto$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quarto model
   */ 
  interface QuartoFieldRefs {
    readonly id: FieldRef<"Quarto", 'Int'>
    readonly numero: FieldRef<"Quarto", 'String'>
    readonly preco: FieldRef<"Quarto", 'Float'>
    readonly status: FieldRef<"Quarto", 'Int'>
    readonly tipoQuartoId: FieldRef<"Quarto", 'Int'>
    readonly createdAt: FieldRef<"Quarto", 'DateTime'>
    readonly updatedAt: FieldRef<"Quarto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quarto findUnique
   */
  export type QuartoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findUniqueOrThrow
   */
  export type QuartoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findFirst
   */
  export type QuartoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findFirstOrThrow
   */
  export type QuartoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findMany
   */
  export type QuartoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quartos to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto create
   */
  export type QuartoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to create a Quarto.
     */
    data: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
  }

  /**
   * Quarto createMany
   */
  export type QuartoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quartos.
     */
    data: QuartoCreateManyInput | QuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quarto update
   */
  export type QuartoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to update a Quarto.
     */
    data: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
    /**
     * Choose, which Quarto to update.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto updateMany
   */
  export type QuartoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quartos.
     */
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyInput>
    /**
     * Filter which Quartos to update
     */
    where?: QuartoWhereInput
  }

  /**
   * Quarto upsert
   */
  export type QuartoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The filter to search for the Quarto to update in case it exists.
     */
    where: QuartoWhereUniqueInput
    /**
     * In case the Quarto found by the `where` argument doesn't exist, create a new Quarto with this data.
     */
    create: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
    /**
     * In case the Quarto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
  }

  /**
   * Quarto delete
   */
  export type QuartoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter which Quarto to delete.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto deleteMany
   */
  export type QuartoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quartos to delete
     */
    where?: QuartoWhereInput
  }

  /**
   * Quarto.fotos
   */
  export type Quarto$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Quarto without action
   */
  export type QuartoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoAvgAggregateOutputType = {
    id: number | null
    status: number | null
    quartoId: number | null
  }

  export type FotoSumAggregateOutputType = {
    id: number | null
    status: number | null
    quartoId: number | null
  }

  export type FotoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    bin: Buffer | null
    extensao: string | null
    status: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FotoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    bin: Buffer | null
    extensao: string | null
    status: number | null
    quartoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    nome: number
    bin: number
    extensao: number
    status: number
    quartoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FotoAvgAggregateInputType = {
    id?: true
    status?: true
    quartoId?: true
  }

  export type FotoSumAggregateInputType = {
    id?: true
    status?: true
    quartoId?: true
  }

  export type FotoMinAggregateInputType = {
    id?: true
    nome?: true
    bin?: true
    extensao?: true
    status?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    nome?: true
    bin?: true
    extensao?: true
    status?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    nome?: true
    bin?: true
    extensao?: true
    status?: true
    quartoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _avg?: FotoAvgAggregateInputType
    _sum?: FotoSumAggregateInputType
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: number
    nome: string
    bin: Buffer
    extensao: string
    status: number
    quartoId: number
    createdAt: Date
    updatedAt: Date
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    bin?: boolean
    extensao?: boolean
    status?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>


  export type FotoSelectScalar = {
    id?: boolean
    nome?: boolean
    bin?: boolean
    extensao?: boolean
    status?: boolean
    quartoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      quarto: Prisma.$QuartoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      bin: Buffer
      extensao: string
      status: number
      quartoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quarto<T extends QuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuartoDefaultArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Foto model
   */ 
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'Int'>
    readonly nome: FieldRef<"Foto", 'String'>
    readonly bin: FieldRef<"Foto", 'Bytes'>
    readonly extensao: FieldRef<"Foto", 'String'>
    readonly status: FieldRef<"Foto", 'Int'>
    readonly quartoId: FieldRef<"Foto", 'Int'>
    readonly createdAt: FieldRef<"Foto", 'DateTime'>
    readonly updatedAt: FieldRef<"Foto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TipoQuartoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoQuartoScalarFieldEnum = (typeof TipoQuartoScalarFieldEnum)[keyof typeof TipoQuartoScalarFieldEnum]


  export const QuartoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    preco: 'preco',
    status: 'status',
    tipoQuartoId: 'tipoQuartoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuartoScalarFieldEnum = (typeof QuartoScalarFieldEnum)[keyof typeof QuartoScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    bin: 'bin',
    extensao: 'extensao',
    status: 'status',
    quartoId: 'quartoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type TipoQuartoWhereInput = {
    AND?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    OR?: TipoQuartoWhereInput[]
    NOT?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    id?: IntFilter<"TipoQuarto"> | number
    descricao?: StringFilter<"TipoQuarto"> | string
    status?: IntFilter<"TipoQuarto"> | number
    createdAt?: DateTimeFilter<"TipoQuarto"> | Date | string
    updatedAt?: DateTimeFilter<"TipoQuarto"> | Date | string
    quartos?: QuartoListRelationFilter
  }

  export type TipoQuartoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quartos?: QuartoOrderByRelationAggregateInput
  }

  export type TipoQuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    OR?: TipoQuartoWhereInput[]
    NOT?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    descricao?: StringFilter<"TipoQuarto"> | string
    status?: IntFilter<"TipoQuarto"> | number
    createdAt?: DateTimeFilter<"TipoQuarto"> | Date | string
    updatedAt?: DateTimeFilter<"TipoQuarto"> | Date | string
    quartos?: QuartoListRelationFilter
  }, "id">

  export type TipoQuartoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoQuartoCountOrderByAggregateInput
    _avg?: TipoQuartoAvgOrderByAggregateInput
    _max?: TipoQuartoMaxOrderByAggregateInput
    _min?: TipoQuartoMinOrderByAggregateInput
    _sum?: TipoQuartoSumOrderByAggregateInput
  }

  export type TipoQuartoScalarWhereWithAggregatesInput = {
    AND?: TipoQuartoScalarWhereWithAggregatesInput | TipoQuartoScalarWhereWithAggregatesInput[]
    OR?: TipoQuartoScalarWhereWithAggregatesInput[]
    NOT?: TipoQuartoScalarWhereWithAggregatesInput | TipoQuartoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoQuarto"> | number
    descricao?: StringWithAggregatesFilter<"TipoQuarto"> | string
    status?: IntWithAggregatesFilter<"TipoQuarto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TipoQuarto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoQuarto"> | Date | string
  }

  export type QuartoWhereInput = {
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    id?: IntFilter<"Quarto"> | number
    numero?: StringFilter<"Quarto"> | string
    preco?: FloatFilter<"Quarto"> | number
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
    createdAt?: DateTimeFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeFilter<"Quarto"> | Date | string
    tipoQuarto?: XOR<TipoQuartoRelationFilter, TipoQuartoWhereInput>
    fotos?: FotoListRelationFilter
  }

  export type QuartoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipoQuarto?: TipoQuartoOrderByWithRelationInput
    fotos?: FotoOrderByRelationAggregateInput
  }

  export type QuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    numero?: StringFilter<"Quarto"> | string
    preco?: FloatFilter<"Quarto"> | number
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
    createdAt?: DateTimeFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeFilter<"Quarto"> | Date | string
    tipoQuarto?: XOR<TipoQuartoRelationFilter, TipoQuartoWhereInput>
    fotos?: FotoListRelationFilter
  }, "id">

  export type QuartoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuartoCountOrderByAggregateInput
    _avg?: QuartoAvgOrderByAggregateInput
    _max?: QuartoMaxOrderByAggregateInput
    _min?: QuartoMinOrderByAggregateInput
    _sum?: QuartoSumOrderByAggregateInput
  }

  export type QuartoScalarWhereWithAggregatesInput = {
    AND?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    OR?: QuartoScalarWhereWithAggregatesInput[]
    NOT?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quarto"> | number
    numero?: StringWithAggregatesFilter<"Quarto"> | string
    preco?: FloatWithAggregatesFilter<"Quarto"> | number
    status?: IntWithAggregatesFilter<"Quarto"> | number
    tipoQuartoId?: IntWithAggregatesFilter<"Quarto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quarto"> | Date | string
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: IntFilter<"Foto"> | number
    nome?: StringFilter<"Foto"> | string
    bin?: BytesFilter<"Foto"> | Buffer
    extensao?: StringFilter<"Foto"> | string
    status?: IntFilter<"Foto"> | number
    quartoId?: IntFilter<"Foto"> | number
    createdAt?: DateTimeFilter<"Foto"> | Date | string
    updatedAt?: DateTimeFilter<"Foto"> | Date | string
    quarto?: XOR<QuartoRelationFilter, QuartoWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    bin?: SortOrder
    extensao?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quarto?: QuartoOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    nome?: StringFilter<"Foto"> | string
    bin?: BytesFilter<"Foto"> | Buffer
    extensao?: StringFilter<"Foto"> | string
    status?: IntFilter<"Foto"> | number
    quartoId?: IntFilter<"Foto"> | number
    createdAt?: DateTimeFilter<"Foto"> | Date | string
    updatedAt?: DateTimeFilter<"Foto"> | Date | string
    quarto?: XOR<QuartoRelationFilter, QuartoWhereInput>
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    bin?: SortOrder
    extensao?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _avg?: FotoAvgOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
    _sum?: FotoSumOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foto"> | number
    nome?: StringWithAggregatesFilter<"Foto"> | string
    bin?: BytesWithAggregatesFilter<"Foto"> | Buffer
    extensao?: StringWithAggregatesFilter<"Foto"> | string
    status?: IntWithAggregatesFilter<"Foto"> | number
    quartoId?: IntWithAggregatesFilter<"Foto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Foto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Foto"> | Date | string
  }

  export type TipoQuartoCreateInput = {
    descricao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quartos?: QuartoCreateNestedManyWithoutTipoQuartoInput
  }

  export type TipoQuartoUncheckedCreateInput = {
    id?: number
    descricao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quartos?: QuartoUncheckedCreateNestedManyWithoutTipoQuartoInput
  }

  export type TipoQuartoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartos?: QuartoUpdateManyWithoutTipoQuartoNestedInput
  }

  export type TipoQuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quartos?: QuartoUncheckedUpdateManyWithoutTipoQuartoNestedInput
  }

  export type TipoQuartoCreateManyInput = {
    id?: number
    descricao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoQuartoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoQuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCreateInput = {
    numero: string
    preco: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoQuarto: TipoQuartoCreateNestedOneWithoutQuartosInput
    fotos?: FotoCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateInput = {
    id?: number
    numero: string
    preco: number
    status: number
    tipoQuartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fotos?: FotoUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoQuarto?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
    fotos?: FotoUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoCreateManyInput = {
    id?: number
    numero: string
    preco: number
    status: number
    tipoQuartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateInput = {
    nome: string
    bin: Buffer
    extensao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quarto: QuartoCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: number
    nome: string
    bin: Buffer
    extensao: string
    status: number
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarto?: QuartoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateManyInput = {
    id?: number
    nome: string
    bin: Buffer
    extensao: string
    status: number
    quartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuartoListRelationFilter = {
    every?: QuartoWhereInput
    some?: QuartoWhereInput
    none?: QuartoWhereInput
  }

  export type QuartoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoQuartoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoQuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type TipoQuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoQuartoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoQuartoSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TipoQuartoRelationFilter = {
    is?: TipoQuartoWhereInput
    isNot?: TipoQuartoWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuartoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
  }

  export type QuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuartoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type QuartoRelationFilter = {
    is?: QuartoWhereInput
    isNot?: QuartoWhereInput
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    bin?: SortOrder
    extensao?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FotoAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    bin?: SortOrder
    extensao?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    bin?: SortOrder
    extensao?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FotoSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    quartoId?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type QuartoCreateNestedManyWithoutTipoQuartoInput = {
    create?: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput> | QuartoCreateWithoutTipoQuartoInput[] | QuartoUncheckedCreateWithoutTipoQuartoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoQuartoInput | QuartoCreateOrConnectWithoutTipoQuartoInput[]
    createMany?: QuartoCreateManyTipoQuartoInputEnvelope
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
  }

  export type QuartoUncheckedCreateNestedManyWithoutTipoQuartoInput = {
    create?: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput> | QuartoCreateWithoutTipoQuartoInput[] | QuartoUncheckedCreateWithoutTipoQuartoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoQuartoInput | QuartoCreateOrConnectWithoutTipoQuartoInput[]
    createMany?: QuartoCreateManyTipoQuartoInputEnvelope
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuartoUpdateManyWithoutTipoQuartoNestedInput = {
    create?: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput> | QuartoCreateWithoutTipoQuartoInput[] | QuartoUncheckedCreateWithoutTipoQuartoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoQuartoInput | QuartoCreateOrConnectWithoutTipoQuartoInput[]
    upsert?: QuartoUpsertWithWhereUniqueWithoutTipoQuartoInput | QuartoUpsertWithWhereUniqueWithoutTipoQuartoInput[]
    createMany?: QuartoCreateManyTipoQuartoInputEnvelope
    set?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    disconnect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    delete?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    update?: QuartoUpdateWithWhereUniqueWithoutTipoQuartoInput | QuartoUpdateWithWhereUniqueWithoutTipoQuartoInput[]
    updateMany?: QuartoUpdateManyWithWhereWithoutTipoQuartoInput | QuartoUpdateManyWithWhereWithoutTipoQuartoInput[]
    deleteMany?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
  }

  export type QuartoUncheckedUpdateManyWithoutTipoQuartoNestedInput = {
    create?: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput> | QuartoCreateWithoutTipoQuartoInput[] | QuartoUncheckedCreateWithoutTipoQuartoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoQuartoInput | QuartoCreateOrConnectWithoutTipoQuartoInput[]
    upsert?: QuartoUpsertWithWhereUniqueWithoutTipoQuartoInput | QuartoUpsertWithWhereUniqueWithoutTipoQuartoInput[]
    createMany?: QuartoCreateManyTipoQuartoInputEnvelope
    set?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    disconnect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    delete?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    update?: QuartoUpdateWithWhereUniqueWithoutTipoQuartoInput | QuartoUpdateWithWhereUniqueWithoutTipoQuartoInput[]
    updateMany?: QuartoUpdateManyWithWhereWithoutTipoQuartoInput | QuartoUpdateManyWithWhereWithoutTipoQuartoInput[]
    deleteMany?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
  }

  export type TipoQuartoCreateNestedOneWithoutQuartosInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
  }

  export type FotoCreateNestedManyWithoutQuartoInput = {
    create?: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput> | FotoCreateWithoutQuartoInput[] | FotoUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutQuartoInput | FotoCreateOrConnectWithoutQuartoInput[]
    createMany?: FotoCreateManyQuartoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput> | FotoCreateWithoutQuartoInput[] | FotoUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutQuartoInput | FotoCreateOrConnectWithoutQuartoInput[]
    createMany?: FotoCreateManyQuartoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    upsert?: TipoQuartoUpsertWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
    update?: XOR<XOR<TipoQuartoUpdateToOneWithWhereWithoutQuartosInput, TipoQuartoUpdateWithoutQuartosInput>, TipoQuartoUncheckedUpdateWithoutQuartosInput>
  }

  export type FotoUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput> | FotoCreateWithoutQuartoInput[] | FotoUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutQuartoInput | FotoCreateOrConnectWithoutQuartoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutQuartoInput | FotoUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: FotoCreateManyQuartoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutQuartoInput | FotoUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutQuartoInput | FotoUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput> | FotoCreateWithoutQuartoInput[] | FotoUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutQuartoInput | FotoCreateOrConnectWithoutQuartoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutQuartoInput | FotoUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: FotoCreateManyQuartoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutQuartoInput | FotoUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutQuartoInput | FotoUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type QuartoCreateNestedOneWithoutFotosInput = {
    create?: XOR<QuartoCreateWithoutFotosInput, QuartoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutFotosInput
    connect?: QuartoWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type QuartoUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<QuartoCreateWithoutFotosInput, QuartoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutFotosInput
    upsert?: QuartoUpsertWithoutFotosInput
    connect?: QuartoWhereUniqueInput
    update?: XOR<XOR<QuartoUpdateToOneWithWhereWithoutFotosInput, QuartoUpdateWithoutFotosInput>, QuartoUncheckedUpdateWithoutFotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type QuartoCreateWithoutTipoQuartoInput = {
    numero: string
    preco: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fotos?: FotoCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutTipoQuartoInput = {
    id?: number
    numero: string
    preco: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fotos?: FotoUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoCreateOrConnectWithoutTipoQuartoInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput>
  }

  export type QuartoCreateManyTipoQuartoInputEnvelope = {
    data: QuartoCreateManyTipoQuartoInput | QuartoCreateManyTipoQuartoInput[]
    skipDuplicates?: boolean
  }

  export type QuartoUpsertWithWhereUniqueWithoutTipoQuartoInput = {
    where: QuartoWhereUniqueInput
    update: XOR<QuartoUpdateWithoutTipoQuartoInput, QuartoUncheckedUpdateWithoutTipoQuartoInput>
    create: XOR<QuartoCreateWithoutTipoQuartoInput, QuartoUncheckedCreateWithoutTipoQuartoInput>
  }

  export type QuartoUpdateWithWhereUniqueWithoutTipoQuartoInput = {
    where: QuartoWhereUniqueInput
    data: XOR<QuartoUpdateWithoutTipoQuartoInput, QuartoUncheckedUpdateWithoutTipoQuartoInput>
  }

  export type QuartoUpdateManyWithWhereWithoutTipoQuartoInput = {
    where: QuartoScalarWhereInput
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyWithoutTipoQuartoInput>
  }

  export type QuartoScalarWhereInput = {
    AND?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
    OR?: QuartoScalarWhereInput[]
    NOT?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
    id?: IntFilter<"Quarto"> | number
    numero?: StringFilter<"Quarto"> | string
    preco?: FloatFilter<"Quarto"> | number
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
    createdAt?: DateTimeFilter<"Quarto"> | Date | string
    updatedAt?: DateTimeFilter<"Quarto"> | Date | string
  }

  export type TipoQuartoCreateWithoutQuartosInput = {
    descricao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoQuartoUncheckedCreateWithoutQuartosInput = {
    id?: number
    descricao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoQuartoCreateOrConnectWithoutQuartosInput = {
    where: TipoQuartoWhereUniqueInput
    create: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
  }

  export type FotoCreateWithoutQuartoInput = {
    nome: string
    bin: Buffer
    extensao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoUncheckedCreateWithoutQuartoInput = {
    id?: number
    nome: string
    bin: Buffer
    extensao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoCreateOrConnectWithoutQuartoInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput>
  }

  export type FotoCreateManyQuartoInputEnvelope = {
    data: FotoCreateManyQuartoInput | FotoCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type TipoQuartoUpsertWithoutQuartosInput = {
    update: XOR<TipoQuartoUpdateWithoutQuartosInput, TipoQuartoUncheckedUpdateWithoutQuartosInput>
    create: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    where?: TipoQuartoWhereInput
  }

  export type TipoQuartoUpdateToOneWithWhereWithoutQuartosInput = {
    where?: TipoQuartoWhereInput
    data: XOR<TipoQuartoUpdateWithoutQuartosInput, TipoQuartoUncheckedUpdateWithoutQuartosInput>
  }

  export type TipoQuartoUpdateWithoutQuartosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoQuartoUncheckedUpdateWithoutQuartosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUpsertWithWhereUniqueWithoutQuartoInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutQuartoInput, FotoUncheckedUpdateWithoutQuartoInput>
    create: XOR<FotoCreateWithoutQuartoInput, FotoUncheckedCreateWithoutQuartoInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutQuartoInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutQuartoInput, FotoUncheckedUpdateWithoutQuartoInput>
  }

  export type FotoUpdateManyWithWhereWithoutQuartoInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutQuartoInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: IntFilter<"Foto"> | number
    nome?: StringFilter<"Foto"> | string
    bin?: BytesFilter<"Foto"> | Buffer
    extensao?: StringFilter<"Foto"> | string
    status?: IntFilter<"Foto"> | number
    quartoId?: IntFilter<"Foto"> | number
    createdAt?: DateTimeFilter<"Foto"> | Date | string
    updatedAt?: DateTimeFilter<"Foto"> | Date | string
  }

  export type QuartoCreateWithoutFotosInput = {
    numero: string
    preco: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoQuarto: TipoQuartoCreateNestedOneWithoutQuartosInput
  }

  export type QuartoUncheckedCreateWithoutFotosInput = {
    id?: number
    numero: string
    preco: number
    status: number
    tipoQuartoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoCreateOrConnectWithoutFotosInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutFotosInput, QuartoUncheckedCreateWithoutFotosInput>
  }

  export type QuartoUpsertWithoutFotosInput = {
    update: XOR<QuartoUpdateWithoutFotosInput, QuartoUncheckedUpdateWithoutFotosInput>
    create: XOR<QuartoCreateWithoutFotosInput, QuartoUncheckedCreateWithoutFotosInput>
    where?: QuartoWhereInput
  }

  export type QuartoUpdateToOneWithWhereWithoutFotosInput = {
    where?: QuartoWhereInput
    data: XOR<QuartoUpdateWithoutFotosInput, QuartoUncheckedUpdateWithoutFotosInput>
  }

  export type QuartoUpdateWithoutFotosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoQuarto?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
  }

  export type QuartoUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCreateManyTipoQuartoInput = {
    id?: number
    numero: string
    preco: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuartoUpdateWithoutTipoQuartoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutTipoQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateManyWithoutTipoQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateManyQuartoInput = {
    id?: number
    nome: string
    bin: Buffer
    extensao: string
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoUpdateWithoutQuartoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUncheckedUpdateManyWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    bin?: BytesFieldUpdateOperationsInput | Buffer
    extensao?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TipoQuartoCountOutputTypeDefaultArgs instead
     */
    export type TipoQuartoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuartoCountOutputTypeDefaultArgs instead
     */
    export type QuartoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuartoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipoQuartoDefaultArgs instead
     */
    export type TipoQuartoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipoQuartoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuartoDefaultArgs instead
     */
    export type QuartoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuartoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FotoDefaultArgs instead
     */
    export type FotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FotoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}