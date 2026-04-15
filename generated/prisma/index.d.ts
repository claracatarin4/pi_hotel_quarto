
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
 * Model fotos
 * 
 */
export type fotos = $Result.DefaultSelection<Prisma.$fotosPayload>

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
   * `prisma.fotos`: Exposes CRUD operations for the **fotos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.fotos.findMany()
    * ```
    */
  get fotos(): Prisma.fotosDelegate<ExtArgs>;
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
    fotos: 'fotos'
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
      modelProps: "tipoQuarto" | "quarto" | "fotos"
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
      fotos: {
        payload: Prisma.$fotosPayload<ExtArgs>
        fields: Prisma.fotosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fotosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fotosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          findFirst: {
            args: Prisma.fotosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fotosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          findMany: {
            args: Prisma.fotosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>[]
          }
          create: {
            args: Prisma.fotosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          createMany: {
            args: Prisma.fotosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fotosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          update: {
            args: Prisma.fotosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          deleteMany: {
            args: Prisma.fotosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fotosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fotosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fotosPayload>
          }
          aggregate: {
            args: Prisma.FotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotos>
          }
          groupBy: {
            args: Prisma.fotosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.fotosCountArgs<ExtArgs>
            result: $Utils.Optional<FotosCountAggregateOutputType> | number
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
    where?: fotosWhereInput
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
  }

  export type TipoQuartoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    status: number | null
  }

  export type TipoQuartoCountAggregateOutputType = {
    id: number
    descricao: number
    status: number
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
  }

  export type TipoQuartoMaxAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
  }

  export type TipoQuartoCountAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
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
    status: number | null
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
    quartos?: boolean | TipoQuarto$quartosArgs<ExtArgs>
    _count?: boolean | TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoQuarto"]>


  export type TipoQuartoSelectScalar = {
    id?: boolean
    descricao?: boolean
    status?: boolean
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
      status: number | null
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
    preco: number | null
    numero: string | null
    status: number | null
    tipoQuartoId: number | null
  }

  export type QuartoMaxAggregateOutputType = {
    id: number | null
    preco: number | null
    numero: string | null
    status: number | null
    tipoQuartoId: number | null
  }

  export type QuartoCountAggregateOutputType = {
    id: number
    preco: number
    numero: number
    status: number
    tipoQuartoId: number
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
    preco?: true
    numero?: true
    status?: true
    tipoQuartoId?: true
  }

  export type QuartoMaxAggregateInputType = {
    id?: true
    preco?: true
    numero?: true
    status?: true
    tipoQuartoId?: true
  }

  export type QuartoCountAggregateInputType = {
    id?: true
    preco?: true
    numero?: true
    status?: true
    tipoQuartoId?: true
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
    preco: number
    numero: string | null
    status: number
    tipoQuartoId: number
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
    preco?: boolean
    numero?: boolean
    status?: boolean
    tipoQuartoId?: boolean
    fotos?: boolean | Quarto$fotosArgs<ExtArgs>
    tipoQuarto?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>


  export type QuartoSelectScalar = {
    id?: boolean
    preco?: boolean
    numero?: boolean
    status?: boolean
    tipoQuartoId?: boolean
  }

  export type QuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | Quarto$fotosArgs<ExtArgs>
    tipoQuarto?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quarto"
    objects: {
      fotos: Prisma.$fotosPayload<ExtArgs>[]
      tipoQuarto: Prisma.$TipoQuartoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      preco: number
      numero: string | null
      status: number
      tipoQuartoId: number
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
    fotos<T extends Quarto$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findMany"> | Null>
    tipoQuarto<T extends TipoQuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoQuartoDefaultArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly preco: FieldRef<"Quarto", 'Float'>
    readonly numero: FieldRef<"Quarto", 'String'>
    readonly status: FieldRef<"Quarto", 'Int'>
    readonly tipoQuartoId: FieldRef<"Quarto", 'Int'>
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
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    where?: fotosWhereInput
    orderBy?: fotosOrderByWithRelationInput | fotosOrderByWithRelationInput[]
    cursor?: fotosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotosScalarFieldEnum | FotosScalarFieldEnum[]
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
   * Model fotos
   */

  export type AggregateFotos = {
    _count: FotosCountAggregateOutputType | null
    _avg: FotosAvgAggregateOutputType | null
    _sum: FotosSumAggregateOutputType | null
    _min: FotosMinAggregateOutputType | null
    _max: FotosMaxAggregateOutputType | null
  }

  export type FotosAvgAggregateOutputType = {
    foto_id: number | null
    foto_status: number | null
    quarto_id: number | null
  }

  export type FotosSumAggregateOutputType = {
    foto_id: number | null
    foto_status: number | null
    quarto_id: number | null
  }

  export type FotosMinAggregateOutputType = {
    foto_id: number | null
    foto_bin: Buffer | null
    foto_nome: string | null
    foto_extensao: string | null
    foto_status: number | null
    quarto_id: number | null
  }

  export type FotosMaxAggregateOutputType = {
    foto_id: number | null
    foto_bin: Buffer | null
    foto_nome: string | null
    foto_extensao: string | null
    foto_status: number | null
    quarto_id: number | null
  }

  export type FotosCountAggregateOutputType = {
    foto_id: number
    foto_bin: number
    foto_nome: number
    foto_extensao: number
    foto_status: number
    quarto_id: number
    _all: number
  }


  export type FotosAvgAggregateInputType = {
    foto_id?: true
    foto_status?: true
    quarto_id?: true
  }

  export type FotosSumAggregateInputType = {
    foto_id?: true
    foto_status?: true
    quarto_id?: true
  }

  export type FotosMinAggregateInputType = {
    foto_id?: true
    foto_bin?: true
    foto_nome?: true
    foto_extensao?: true
    foto_status?: true
    quarto_id?: true
  }

  export type FotosMaxAggregateInputType = {
    foto_id?: true
    foto_bin?: true
    foto_nome?: true
    foto_extensao?: true
    foto_status?: true
    quarto_id?: true
  }

  export type FotosCountAggregateInputType = {
    foto_id?: true
    foto_bin?: true
    foto_nome?: true
    foto_extensao?: true
    foto_status?: true
    quarto_id?: true
    _all?: true
  }

  export type FotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fotos to aggregate.
     */
    where?: fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fotos to fetch.
     */
    orderBy?: fotosOrderByWithRelationInput | fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fotos
    **/
    _count?: true | FotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotosMaxAggregateInputType
  }

  export type GetFotosAggregateType<T extends FotosAggregateArgs> = {
        [P in keyof T & keyof AggregateFotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotos[P]>
      : GetScalarType<T[P], AggregateFotos[P]>
  }




  export type fotosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fotosWhereInput
    orderBy?: fotosOrderByWithAggregationInput | fotosOrderByWithAggregationInput[]
    by: FotosScalarFieldEnum[] | FotosScalarFieldEnum
    having?: fotosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotosCountAggregateInputType | true
    _avg?: FotosAvgAggregateInputType
    _sum?: FotosSumAggregateInputType
    _min?: FotosMinAggregateInputType
    _max?: FotosMaxAggregateInputType
  }

  export type FotosGroupByOutputType = {
    foto_id: number
    foto_bin: Buffer | null
    foto_nome: string | null
    foto_extensao: string | null
    foto_status: number | null
    quarto_id: number
    _count: FotosCountAggregateOutputType | null
    _avg: FotosAvgAggregateOutputType | null
    _sum: FotosSumAggregateOutputType | null
    _min: FotosMinAggregateOutputType | null
    _max: FotosMaxAggregateOutputType | null
  }

  type GetFotosGroupByPayload<T extends fotosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotosGroupByOutputType[P]>
            : GetScalarType<T[P], FotosGroupByOutputType[P]>
        }
      >
    >


  export type fotosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    foto_id?: boolean
    foto_bin?: boolean
    foto_nome?: boolean
    foto_extensao?: boolean
    foto_status?: boolean
    quarto_id?: boolean
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotos"]>


  export type fotosSelectScalar = {
    foto_id?: boolean
    foto_bin?: boolean
    foto_nome?: boolean
    foto_extensao?: boolean
    foto_status?: boolean
    quarto_id?: boolean
  }

  export type fotosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
  }

  export type $fotosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fotos"
    objects: {
      quarto: Prisma.$QuartoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      foto_id: number
      foto_bin: Buffer | null
      foto_nome: string | null
      foto_extensao: string | null
      foto_status: number | null
      quarto_id: number
    }, ExtArgs["result"]["fotos"]>
    composites: {}
  }

  type fotosGetPayload<S extends boolean | null | undefined | fotosDefaultArgs> = $Result.GetResult<Prisma.$fotosPayload, S>

  type fotosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<fotosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FotosCountAggregateInputType | true
    }

  export interface fotosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fotos'], meta: { name: 'fotos' } }
    /**
     * Find zero or one Fotos that matches the filter.
     * @param {fotosFindUniqueArgs} args - Arguments to find a Fotos
     * @example
     * // Get one Fotos
     * const fotos = await prisma.fotos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fotosFindUniqueArgs>(args: SelectSubset<T, fotosFindUniqueArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fotos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {fotosFindUniqueOrThrowArgs} args - Arguments to find a Fotos
     * @example
     * // Get one Fotos
     * const fotos = await prisma.fotos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fotosFindUniqueOrThrowArgs>(args: SelectSubset<T, fotosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosFindFirstArgs} args - Arguments to find a Fotos
     * @example
     * // Get one Fotos
     * const fotos = await prisma.fotos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fotosFindFirstArgs>(args?: SelectSubset<T, fotosFindFirstArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fotos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosFindFirstOrThrowArgs} args - Arguments to find a Fotos
     * @example
     * // Get one Fotos
     * const fotos = await prisma.fotos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fotosFindFirstOrThrowArgs>(args?: SelectSubset<T, fotosFindFirstOrThrowArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.fotos.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.fotos.findMany({ take: 10 })
     * 
     * // Only select the `foto_id`
     * const fotosWithFoto_idOnly = await prisma.fotos.findMany({ select: { foto_id: true } })
     * 
     */
    findMany<T extends fotosFindManyArgs>(args?: SelectSubset<T, fotosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fotos.
     * @param {fotosCreateArgs} args - Arguments to create a Fotos.
     * @example
     * // Create one Fotos
     * const Fotos = await prisma.fotos.create({
     *   data: {
     *     // ... data to create a Fotos
     *   }
     * })
     * 
     */
    create<T extends fotosCreateArgs>(args: SelectSubset<T, fotosCreateArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Fotos.
     * @param {fotosCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const fotos = await prisma.fotos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fotosCreateManyArgs>(args?: SelectSubset<T, fotosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fotos.
     * @param {fotosDeleteArgs} args - Arguments to delete one Fotos.
     * @example
     * // Delete one Fotos
     * const Fotos = await prisma.fotos.delete({
     *   where: {
     *     // ... filter to delete one Fotos
     *   }
     * })
     * 
     */
    delete<T extends fotosDeleteArgs>(args: SelectSubset<T, fotosDeleteArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fotos.
     * @param {fotosUpdateArgs} args - Arguments to update one Fotos.
     * @example
     * // Update one Fotos
     * const fotos = await prisma.fotos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fotosUpdateArgs>(args: SelectSubset<T, fotosUpdateArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Fotos.
     * @param {fotosDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.fotos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fotosDeleteManyArgs>(args?: SelectSubset<T, fotosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const fotos = await prisma.fotos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fotosUpdateManyArgs>(args: SelectSubset<T, fotosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fotos.
     * @param {fotosUpsertArgs} args - Arguments to update or create a Fotos.
     * @example
     * // Update or create a Fotos
     * const fotos = await prisma.fotos.upsert({
     *   create: {
     *     // ... data to create a Fotos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fotos we want to update
     *   }
     * })
     */
    upsert<T extends fotosUpsertArgs>(args: SelectSubset<T, fotosUpsertArgs<ExtArgs>>): Prisma__fotosClient<$Result.GetResult<Prisma.$fotosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.fotos.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends fotosCountArgs>(
      args?: Subset<T, fotosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotosAggregateArgs>(args: Subset<T, FotosAggregateArgs>): Prisma.PrismaPromise<GetFotosAggregateType<T>>

    /**
     * Group by Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fotosGroupByArgs} args - Group by arguments.
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
      T extends fotosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fotosGroupByArgs['orderBy'] }
        : { orderBy?: fotosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fotosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fotos model
   */
  readonly fields: fotosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fotos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fotosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the fotos model
   */ 
  interface fotosFieldRefs {
    readonly foto_id: FieldRef<"fotos", 'Int'>
    readonly foto_bin: FieldRef<"fotos", 'Bytes'>
    readonly foto_nome: FieldRef<"fotos", 'String'>
    readonly foto_extensao: FieldRef<"fotos", 'String'>
    readonly foto_status: FieldRef<"fotos", 'Int'>
    readonly quarto_id: FieldRef<"fotos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * fotos findUnique
   */
  export type fotosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter, which fotos to fetch.
     */
    where: fotosWhereUniqueInput
  }

  /**
   * fotos findUniqueOrThrow
   */
  export type fotosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter, which fotos to fetch.
     */
    where: fotosWhereUniqueInput
  }

  /**
   * fotos findFirst
   */
  export type fotosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter, which fotos to fetch.
     */
    where?: fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fotos to fetch.
     */
    orderBy?: fotosOrderByWithRelationInput | fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fotos.
     */
    cursor?: fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fotos.
     */
    distinct?: FotosScalarFieldEnum | FotosScalarFieldEnum[]
  }

  /**
   * fotos findFirstOrThrow
   */
  export type fotosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter, which fotos to fetch.
     */
    where?: fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fotos to fetch.
     */
    orderBy?: fotosOrderByWithRelationInput | fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fotos.
     */
    cursor?: fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fotos.
     */
    distinct?: FotosScalarFieldEnum | FotosScalarFieldEnum[]
  }

  /**
   * fotos findMany
   */
  export type fotosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter, which fotos to fetch.
     */
    where?: fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fotos to fetch.
     */
    orderBy?: fotosOrderByWithRelationInput | fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fotos.
     */
    cursor?: fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fotos.
     */
    skip?: number
    distinct?: FotosScalarFieldEnum | FotosScalarFieldEnum[]
  }

  /**
   * fotos create
   */
  export type fotosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * The data needed to create a fotos.
     */
    data: XOR<fotosCreateInput, fotosUncheckedCreateInput>
  }

  /**
   * fotos createMany
   */
  export type fotosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fotos.
     */
    data: fotosCreateManyInput | fotosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fotos update
   */
  export type fotosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * The data needed to update a fotos.
     */
    data: XOR<fotosUpdateInput, fotosUncheckedUpdateInput>
    /**
     * Choose, which fotos to update.
     */
    where: fotosWhereUniqueInput
  }

  /**
   * fotos updateMany
   */
  export type fotosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fotos.
     */
    data: XOR<fotosUpdateManyMutationInput, fotosUncheckedUpdateManyInput>
    /**
     * Filter which fotos to update
     */
    where?: fotosWhereInput
  }

  /**
   * fotos upsert
   */
  export type fotosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * The filter to search for the fotos to update in case it exists.
     */
    where: fotosWhereUniqueInput
    /**
     * In case the fotos found by the `where` argument doesn't exist, create a new fotos with this data.
     */
    create: XOR<fotosCreateInput, fotosUncheckedCreateInput>
    /**
     * In case the fotos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fotosUpdateInput, fotosUncheckedUpdateInput>
  }

  /**
   * fotos delete
   */
  export type fotosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
    /**
     * Filter which fotos to delete.
     */
    where: fotosWhereUniqueInput
  }

  /**
   * fotos deleteMany
   */
  export type fotosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fotos to delete
     */
    where?: fotosWhereInput
  }

  /**
   * fotos without action
   */
  export type fotosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fotos
     */
    select?: fotosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fotosInclude<ExtArgs> | null
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
    status: 'status'
  };

  export type TipoQuartoScalarFieldEnum = (typeof TipoQuartoScalarFieldEnum)[keyof typeof TipoQuartoScalarFieldEnum]


  export const QuartoScalarFieldEnum: {
    id: 'id',
    preco: 'preco',
    numero: 'numero',
    status: 'status',
    tipoQuartoId: 'tipoQuartoId'
  };

  export type QuartoScalarFieldEnum = (typeof QuartoScalarFieldEnum)[keyof typeof QuartoScalarFieldEnum]


  export const FotosScalarFieldEnum: {
    foto_id: 'foto_id',
    foto_bin: 'foto_bin',
    foto_nome: 'foto_nome',
    foto_extensao: 'foto_extensao',
    foto_status: 'foto_status',
    quarto_id: 'quarto_id'
  };

  export type FotosScalarFieldEnum = (typeof FotosScalarFieldEnum)[keyof typeof FotosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    status?: IntNullableFilter<"TipoQuarto"> | number | null
    quartos?: QuartoListRelationFilter
  }

  export type TipoQuartoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrderInput | SortOrder
    quartos?: QuartoOrderByRelationAggregateInput
  }

  export type TipoQuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    OR?: TipoQuartoWhereInput[]
    NOT?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    descricao?: StringFilter<"TipoQuarto"> | string
    status?: IntNullableFilter<"TipoQuarto"> | number | null
    quartos?: QuartoListRelationFilter
  }, "id">

  export type TipoQuartoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrderInput | SortOrder
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
    status?: IntNullableWithAggregatesFilter<"TipoQuarto"> | number | null
  }

  export type QuartoWhereInput = {
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    id?: IntFilter<"Quarto"> | number
    preco?: FloatFilter<"Quarto"> | number
    numero?: StringNullableFilter<"Quarto"> | string | null
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
    fotos?: FotosListRelationFilter
    tipoQuarto?: XOR<TipoQuartoRelationFilter, TipoQuartoWhereInput>
  }

  export type QuartoOrderByWithRelationInput = {
    id?: SortOrder
    preco?: SortOrder
    numero?: SortOrderInput | SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
    fotos?: fotosOrderByRelationAggregateInput
    tipoQuarto?: TipoQuartoOrderByWithRelationInput
  }

  export type QuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    preco?: FloatFilter<"Quarto"> | number
    numero?: StringNullableFilter<"Quarto"> | string | null
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
    fotos?: FotosListRelationFilter
    tipoQuarto?: XOR<TipoQuartoRelationFilter, TipoQuartoWhereInput>
  }, "id">

  export type QuartoOrderByWithAggregationInput = {
    id?: SortOrder
    preco?: SortOrder
    numero?: SortOrderInput | SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
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
    preco?: FloatWithAggregatesFilter<"Quarto"> | number
    numero?: StringNullableWithAggregatesFilter<"Quarto"> | string | null
    status?: IntWithAggregatesFilter<"Quarto"> | number
    tipoQuartoId?: IntWithAggregatesFilter<"Quarto"> | number
  }

  export type fotosWhereInput = {
    AND?: fotosWhereInput | fotosWhereInput[]
    OR?: fotosWhereInput[]
    NOT?: fotosWhereInput | fotosWhereInput[]
    foto_id?: IntFilter<"fotos"> | number
    foto_bin?: BytesNullableFilter<"fotos"> | Buffer | null
    foto_nome?: StringNullableFilter<"fotos"> | string | null
    foto_extensao?: StringNullableFilter<"fotos"> | string | null
    foto_status?: IntNullableFilter<"fotos"> | number | null
    quarto_id?: IntFilter<"fotos"> | number
    quarto?: XOR<QuartoRelationFilter, QuartoWhereInput>
  }

  export type fotosOrderByWithRelationInput = {
    foto_id?: SortOrder
    foto_bin?: SortOrderInput | SortOrder
    foto_nome?: SortOrderInput | SortOrder
    foto_extensao?: SortOrderInput | SortOrder
    foto_status?: SortOrderInput | SortOrder
    quarto_id?: SortOrder
    quarto?: QuartoOrderByWithRelationInput
  }

  export type fotosWhereUniqueInput = Prisma.AtLeast<{
    foto_id?: number
    AND?: fotosWhereInput | fotosWhereInput[]
    OR?: fotosWhereInput[]
    NOT?: fotosWhereInput | fotosWhereInput[]
    foto_bin?: BytesNullableFilter<"fotos"> | Buffer | null
    foto_nome?: StringNullableFilter<"fotos"> | string | null
    foto_extensao?: StringNullableFilter<"fotos"> | string | null
    foto_status?: IntNullableFilter<"fotos"> | number | null
    quarto_id?: IntFilter<"fotos"> | number
    quarto?: XOR<QuartoRelationFilter, QuartoWhereInput>
  }, "foto_id">

  export type fotosOrderByWithAggregationInput = {
    foto_id?: SortOrder
    foto_bin?: SortOrderInput | SortOrder
    foto_nome?: SortOrderInput | SortOrder
    foto_extensao?: SortOrderInput | SortOrder
    foto_status?: SortOrderInput | SortOrder
    quarto_id?: SortOrder
    _count?: fotosCountOrderByAggregateInput
    _avg?: fotosAvgOrderByAggregateInput
    _max?: fotosMaxOrderByAggregateInput
    _min?: fotosMinOrderByAggregateInput
    _sum?: fotosSumOrderByAggregateInput
  }

  export type fotosScalarWhereWithAggregatesInput = {
    AND?: fotosScalarWhereWithAggregatesInput | fotosScalarWhereWithAggregatesInput[]
    OR?: fotosScalarWhereWithAggregatesInput[]
    NOT?: fotosScalarWhereWithAggregatesInput | fotosScalarWhereWithAggregatesInput[]
    foto_id?: IntWithAggregatesFilter<"fotos"> | number
    foto_bin?: BytesNullableWithAggregatesFilter<"fotos"> | Buffer | null
    foto_nome?: StringNullableWithAggregatesFilter<"fotos"> | string | null
    foto_extensao?: StringNullableWithAggregatesFilter<"fotos"> | string | null
    foto_status?: IntNullableWithAggregatesFilter<"fotos"> | number | null
    quarto_id?: IntWithAggregatesFilter<"fotos"> | number
  }

  export type TipoQuartoCreateInput = {
    descricao: string
    status?: number | null
    quartos?: QuartoCreateNestedManyWithoutTipoQuartoInput
  }

  export type TipoQuartoUncheckedCreateInput = {
    id?: number
    descricao: string
    status?: number | null
    quartos?: QuartoUncheckedCreateNestedManyWithoutTipoQuartoInput
  }

  export type TipoQuartoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    quartos?: QuartoUpdateManyWithoutTipoQuartoNestedInput
  }

  export type TipoQuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    quartos?: QuartoUncheckedUpdateManyWithoutTipoQuartoNestedInput
  }

  export type TipoQuartoCreateManyInput = {
    id?: number
    descricao: string
    status?: number | null
  }

  export type TipoQuartoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TipoQuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuartoCreateInput = {
    preco: number
    numero?: string | null
    status: number
    fotos?: fotosCreateNestedManyWithoutQuartoInput
    tipoQuarto: TipoQuartoCreateNestedOneWithoutQuartosInput
  }

  export type QuartoUncheckedCreateInput = {
    id?: number
    preco: number
    numero?: string | null
    status: number
    tipoQuartoId: number
    fotos?: fotosUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUpdateInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    fotos?: fotosUpdateManyWithoutQuartoNestedInput
    tipoQuarto?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
  }

  export type QuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
    fotos?: fotosUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoCreateManyInput = {
    id?: number
    preco: number
    numero?: string | null
    status: number
    tipoQuartoId: number
  }

  export type QuartoUpdateManyMutationInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type QuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
  }

  export type fotosCreateInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
    quarto: QuartoCreateNestedOneWithoutFotosInput
  }

  export type fotosUncheckedCreateInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
    quarto_id: number
  }

  export type fotosUpdateInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
    quarto?: QuartoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type fotosUncheckedUpdateInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
    quarto_id?: IntFieldUpdateOperationsInput | number
  }

  export type fotosCreateManyInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
    quarto_id: number
  }

  export type fotosUpdateManyMutationInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fotosUncheckedUpdateManyInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
    quarto_id?: IntFieldUpdateOperationsInput | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuartoListRelationFilter = {
    every?: QuartoWhereInput
    some?: QuartoWhereInput
    none?: QuartoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuartoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoQuartoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
  }

  export type TipoQuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type TipoQuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
  }

  export type TipoQuartoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FotosListRelationFilter = {
    every?: fotosWhereInput
    some?: fotosWhereInput
    none?: fotosWhereInput
  }

  export type TipoQuartoRelationFilter = {
    is?: TipoQuartoWhereInput
    isNot?: TipoQuartoWhereInput
  }

  export type fotosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuartoCountOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
  }

  export type QuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
  }

  export type QuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
  }

  export type QuartoMinOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    tipoQuartoId?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type QuartoRelationFilter = {
    is?: QuartoWhereInput
    isNot?: QuartoWhereInput
  }

  export type fotosCountOrderByAggregateInput = {
    foto_id?: SortOrder
    foto_bin?: SortOrder
    foto_nome?: SortOrder
    foto_extensao?: SortOrder
    foto_status?: SortOrder
    quarto_id?: SortOrder
  }

  export type fotosAvgOrderByAggregateInput = {
    foto_id?: SortOrder
    foto_status?: SortOrder
    quarto_id?: SortOrder
  }

  export type fotosMaxOrderByAggregateInput = {
    foto_id?: SortOrder
    foto_bin?: SortOrder
    foto_nome?: SortOrder
    foto_extensao?: SortOrder
    foto_status?: SortOrder
    quarto_id?: SortOrder
  }

  export type fotosMinOrderByAggregateInput = {
    foto_id?: SortOrder
    foto_bin?: SortOrder
    foto_nome?: SortOrder
    foto_extensao?: SortOrder
    foto_status?: SortOrder
    quarto_id?: SortOrder
  }

  export type fotosSumOrderByAggregateInput = {
    foto_id?: SortOrder
    foto_status?: SortOrder
    quarto_id?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type fotosCreateNestedManyWithoutQuartoInput = {
    create?: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput> | fotosCreateWithoutQuartoInput[] | fotosUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: fotosCreateOrConnectWithoutQuartoInput | fotosCreateOrConnectWithoutQuartoInput[]
    createMany?: fotosCreateManyQuartoInputEnvelope
    connect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
  }

  export type TipoQuartoCreateNestedOneWithoutQuartosInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
  }

  export type fotosUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput> | fotosCreateWithoutQuartoInput[] | fotosUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: fotosCreateOrConnectWithoutQuartoInput | fotosCreateOrConnectWithoutQuartoInput[]
    createMany?: fotosCreateManyQuartoInputEnvelope
    connect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type fotosUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput> | fotosCreateWithoutQuartoInput[] | fotosUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: fotosCreateOrConnectWithoutQuartoInput | fotosCreateOrConnectWithoutQuartoInput[]
    upsert?: fotosUpsertWithWhereUniqueWithoutQuartoInput | fotosUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: fotosCreateManyQuartoInputEnvelope
    set?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    disconnect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    delete?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    connect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    update?: fotosUpdateWithWhereUniqueWithoutQuartoInput | fotosUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: fotosUpdateManyWithWhereWithoutQuartoInput | fotosUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: fotosScalarWhereInput | fotosScalarWhereInput[]
  }

  export type TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    upsert?: TipoQuartoUpsertWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
    update?: XOR<XOR<TipoQuartoUpdateToOneWithWhereWithoutQuartosInput, TipoQuartoUpdateWithoutQuartosInput>, TipoQuartoUncheckedUpdateWithoutQuartosInput>
  }

  export type fotosUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput> | fotosCreateWithoutQuartoInput[] | fotosUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: fotosCreateOrConnectWithoutQuartoInput | fotosCreateOrConnectWithoutQuartoInput[]
    upsert?: fotosUpsertWithWhereUniqueWithoutQuartoInput | fotosUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: fotosCreateManyQuartoInputEnvelope
    set?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    disconnect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    delete?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    connect?: fotosWhereUniqueInput | fotosWhereUniqueInput[]
    update?: fotosUpdateWithWhereUniqueWithoutQuartoInput | fotosUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: fotosUpdateManyWithWhereWithoutQuartoInput | fotosUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: fotosScalarWhereInput | fotosScalarWhereInput[]
  }

  export type QuartoCreateNestedOneWithoutFotosInput = {
    create?: XOR<QuartoCreateWithoutFotosInput, QuartoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutFotosInput
    connect?: QuartoWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type QuartoCreateWithoutTipoQuartoInput = {
    preco: number
    numero?: string | null
    status: number
    fotos?: fotosCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutTipoQuartoInput = {
    id?: number
    preco: number
    numero?: string | null
    status: number
    fotos?: fotosUncheckedCreateNestedManyWithoutQuartoInput
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
    preco?: FloatFilter<"Quarto"> | number
    numero?: StringNullableFilter<"Quarto"> | string | null
    status?: IntFilter<"Quarto"> | number
    tipoQuartoId?: IntFilter<"Quarto"> | number
  }

  export type fotosCreateWithoutQuartoInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
  }

  export type fotosUncheckedCreateWithoutQuartoInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
  }

  export type fotosCreateOrConnectWithoutQuartoInput = {
    where: fotosWhereUniqueInput
    create: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput>
  }

  export type fotosCreateManyQuartoInputEnvelope = {
    data: fotosCreateManyQuartoInput | fotosCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type TipoQuartoCreateWithoutQuartosInput = {
    descricao: string
    status?: number | null
  }

  export type TipoQuartoUncheckedCreateWithoutQuartosInput = {
    id?: number
    descricao: string
    status?: number | null
  }

  export type TipoQuartoCreateOrConnectWithoutQuartosInput = {
    where: TipoQuartoWhereUniqueInput
    create: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
  }

  export type fotosUpsertWithWhereUniqueWithoutQuartoInput = {
    where: fotosWhereUniqueInput
    update: XOR<fotosUpdateWithoutQuartoInput, fotosUncheckedUpdateWithoutQuartoInput>
    create: XOR<fotosCreateWithoutQuartoInput, fotosUncheckedCreateWithoutQuartoInput>
  }

  export type fotosUpdateWithWhereUniqueWithoutQuartoInput = {
    where: fotosWhereUniqueInput
    data: XOR<fotosUpdateWithoutQuartoInput, fotosUncheckedUpdateWithoutQuartoInput>
  }

  export type fotosUpdateManyWithWhereWithoutQuartoInput = {
    where: fotosScalarWhereInput
    data: XOR<fotosUpdateManyMutationInput, fotosUncheckedUpdateManyWithoutQuartoInput>
  }

  export type fotosScalarWhereInput = {
    AND?: fotosScalarWhereInput | fotosScalarWhereInput[]
    OR?: fotosScalarWhereInput[]
    NOT?: fotosScalarWhereInput | fotosScalarWhereInput[]
    foto_id?: IntFilter<"fotos"> | number
    foto_bin?: BytesNullableFilter<"fotos"> | Buffer | null
    foto_nome?: StringNullableFilter<"fotos"> | string | null
    foto_extensao?: StringNullableFilter<"fotos"> | string | null
    foto_status?: IntNullableFilter<"fotos"> | number | null
    quarto_id?: IntFilter<"fotos"> | number
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
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TipoQuartoUncheckedUpdateWithoutQuartosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type QuartoCreateWithoutFotosInput = {
    preco: number
    numero?: string | null
    status: number
    tipoQuarto: TipoQuartoCreateNestedOneWithoutQuartosInput
  }

  export type QuartoUncheckedCreateWithoutFotosInput = {
    id?: number
    preco: number
    numero?: string | null
    status: number
    tipoQuartoId: number
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
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tipoQuarto?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
  }

  export type QuartoUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tipoQuartoId?: IntFieldUpdateOperationsInput | number
  }

  export type QuartoCreateManyTipoQuartoInput = {
    id?: number
    preco: number
    numero?: string | null
    status: number
  }

  export type QuartoUpdateWithoutTipoQuartoInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    fotos?: fotosUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutTipoQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    fotos?: fotosUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateManyWithoutTipoQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
  }

  export type fotosCreateManyQuartoInput = {
    foto_id: number
    foto_bin?: Buffer | null
    foto_nome?: string | null
    foto_extensao?: string | null
    foto_status?: number | null
  }

  export type fotosUpdateWithoutQuartoInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fotosUncheckedUpdateWithoutQuartoInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fotosUncheckedUpdateManyWithoutQuartoInput = {
    foto_id?: IntFieldUpdateOperationsInput | number
    foto_bin?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    foto_nome?: NullableStringFieldUpdateOperationsInput | string | null
    foto_extensao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_status?: NullableIntFieldUpdateOperationsInput | number | null
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
     * @deprecated Use fotosDefaultArgs instead
     */
    export type fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = fotosDefaultArgs<ExtArgs>

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