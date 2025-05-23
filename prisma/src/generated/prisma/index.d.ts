
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Binhluan
 * 
 */
export type Binhluan = $Result.DefaultSelection<Prisma.$BinhluanPayload>
/**
 * Model Theodoi
 * 
 */
export type Theodoi = $Result.DefaultSelection<Prisma.$TheodoiPayload>
/**
 * Model Baiviet
 * 
 */
export type Baiviet = $Result.DefaultSelection<Prisma.$BaivietPayload>
/**
 * Model Yeuthich
 * 
 */
export type Yeuthich = $Result.DefaultSelection<Prisma.$YeuthichPayload>
/**
 * Model Thongbao
 * 
 */
export type Thongbao = $Result.DefaultSelection<Prisma.$ThongbaoPayload>
/**
 * Model Chude
 * 
 */
export type Chude = $Result.DefaultSelection<Prisma.$ChudePayload>
/**
 * Model CuocTroChuyen
 * 
 */
export type CuocTroChuyen = $Result.DefaultSelection<Prisma.$CuocTroChuyenPayload>
/**
 * Model CuocTroChuyenThanhVien
 * 
 */
export type CuocTroChuyenThanhVien = $Result.DefaultSelection<Prisma.$CuocTroChuyenThanhVienPayload>
/**
 * Model TinNhan
 * 
 */
export type TinNhan = $Result.DefaultSelection<Prisma.$TinNhanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.binhluan`: Exposes CRUD operations for the **Binhluan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Binhluans
    * const binhluans = await prisma.binhluan.findMany()
    * ```
    */
  get binhluan(): Prisma.BinhluanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theodoi`: Exposes CRUD operations for the **Theodoi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theodois
    * const theodois = await prisma.theodoi.findMany()
    * ```
    */
  get theodoi(): Prisma.TheodoiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.baiviet`: Exposes CRUD operations for the **Baiviet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Baiviets
    * const baiviets = await prisma.baiviet.findMany()
    * ```
    */
  get baiviet(): Prisma.BaivietDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yeuthich`: Exposes CRUD operations for the **Yeuthich** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yeuthiches
    * const yeuthiches = await prisma.yeuthich.findMany()
    * ```
    */
  get yeuthich(): Prisma.YeuthichDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thongbao`: Exposes CRUD operations for the **Thongbao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thongbaos
    * const thongbaos = await prisma.thongbao.findMany()
    * ```
    */
  get thongbao(): Prisma.ThongbaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chude`: Exposes CRUD operations for the **Chude** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chudes
    * const chudes = await prisma.chude.findMany()
    * ```
    */
  get chude(): Prisma.ChudeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuocTroChuyen`: Exposes CRUD operations for the **CuocTroChuyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CuocTroChuyens
    * const cuocTroChuyens = await prisma.cuocTroChuyen.findMany()
    * ```
    */
  get cuocTroChuyen(): Prisma.CuocTroChuyenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuocTroChuyenThanhVien`: Exposes CRUD operations for the **CuocTroChuyenThanhVien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CuocTroChuyenThanhViens
    * const cuocTroChuyenThanhViens = await prisma.cuocTroChuyenThanhVien.findMany()
    * ```
    */
  get cuocTroChuyenThanhVien(): Prisma.CuocTroChuyenThanhVienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tinNhan`: Exposes CRUD operations for the **TinNhan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TinNhans
    * const tinNhans = await prisma.tinNhan.findMany()
    * ```
    */
  get tinNhan(): Prisma.TinNhanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Binhluan: 'Binhluan',
    Theodoi: 'Theodoi',
    Baiviet: 'Baiviet',
    Yeuthich: 'Yeuthich',
    Thongbao: 'Thongbao',
    Chude: 'Chude',
    CuocTroChuyen: 'CuocTroChuyen',
    CuocTroChuyenThanhVien: 'CuocTroChuyenThanhVien',
    TinNhan: 'TinNhan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "binhluan" | "theodoi" | "baiviet" | "yeuthich" | "thongbao" | "chude" | "cuocTroChuyen" | "cuocTroChuyenThanhVien" | "tinNhan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Binhluan: {
        payload: Prisma.$BinhluanPayload<ExtArgs>
        fields: Prisma.BinhluanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinhluanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinhluanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          findFirst: {
            args: Prisma.BinhluanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinhluanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          findMany: {
            args: Prisma.BinhluanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>[]
          }
          create: {
            args: Prisma.BinhluanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          createMany: {
            args: Prisma.BinhluanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BinhluanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          update: {
            args: Prisma.BinhluanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          deleteMany: {
            args: Prisma.BinhluanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BinhluanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BinhluanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinhluanPayload>
          }
          aggregate: {
            args: Prisma.BinhluanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBinhluan>
          }
          groupBy: {
            args: Prisma.BinhluanGroupByArgs<ExtArgs>
            result: $Utils.Optional<BinhluanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinhluanCountArgs<ExtArgs>
            result: $Utils.Optional<BinhluanCountAggregateOutputType> | number
          }
        }
      }
      Theodoi: {
        payload: Prisma.$TheodoiPayload<ExtArgs>
        fields: Prisma.TheodoiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TheodoiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TheodoiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          findFirst: {
            args: Prisma.TheodoiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TheodoiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          findMany: {
            args: Prisma.TheodoiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>[]
          }
          create: {
            args: Prisma.TheodoiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          createMany: {
            args: Prisma.TheodoiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TheodoiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          update: {
            args: Prisma.TheodoiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          deleteMany: {
            args: Prisma.TheodoiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TheodoiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TheodoiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheodoiPayload>
          }
          aggregate: {
            args: Prisma.TheodoiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheodoi>
          }
          groupBy: {
            args: Prisma.TheodoiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TheodoiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TheodoiCountArgs<ExtArgs>
            result: $Utils.Optional<TheodoiCountAggregateOutputType> | number
          }
        }
      }
      Baiviet: {
        payload: Prisma.$BaivietPayload<ExtArgs>
        fields: Prisma.BaivietFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaivietFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaivietFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          findFirst: {
            args: Prisma.BaivietFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaivietFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          findMany: {
            args: Prisma.BaivietFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>[]
          }
          create: {
            args: Prisma.BaivietCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          createMany: {
            args: Prisma.BaivietCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BaivietDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          update: {
            args: Prisma.BaivietUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          deleteMany: {
            args: Prisma.BaivietDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaivietUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BaivietUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaivietPayload>
          }
          aggregate: {
            args: Prisma.BaivietAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaiviet>
          }
          groupBy: {
            args: Prisma.BaivietGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaivietGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaivietCountArgs<ExtArgs>
            result: $Utils.Optional<BaivietCountAggregateOutputType> | number
          }
        }
      }
      Yeuthich: {
        payload: Prisma.$YeuthichPayload<ExtArgs>
        fields: Prisma.YeuthichFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YeuthichFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YeuthichFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          findFirst: {
            args: Prisma.YeuthichFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YeuthichFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          findMany: {
            args: Prisma.YeuthichFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>[]
          }
          create: {
            args: Prisma.YeuthichCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          createMany: {
            args: Prisma.YeuthichCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.YeuthichDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          update: {
            args: Prisma.YeuthichUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          deleteMany: {
            args: Prisma.YeuthichDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YeuthichUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YeuthichUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YeuthichPayload>
          }
          aggregate: {
            args: Prisma.YeuthichAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYeuthich>
          }
          groupBy: {
            args: Prisma.YeuthichGroupByArgs<ExtArgs>
            result: $Utils.Optional<YeuthichGroupByOutputType>[]
          }
          count: {
            args: Prisma.YeuthichCountArgs<ExtArgs>
            result: $Utils.Optional<YeuthichCountAggregateOutputType> | number
          }
        }
      }
      Thongbao: {
        payload: Prisma.$ThongbaoPayload<ExtArgs>
        fields: Prisma.ThongbaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThongbaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThongbaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          findFirst: {
            args: Prisma.ThongbaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThongbaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          findMany: {
            args: Prisma.ThongbaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>[]
          }
          create: {
            args: Prisma.ThongbaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          createMany: {
            args: Prisma.ThongbaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ThongbaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          update: {
            args: Prisma.ThongbaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          deleteMany: {
            args: Prisma.ThongbaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThongbaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ThongbaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThongbaoPayload>
          }
          aggregate: {
            args: Prisma.ThongbaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThongbao>
          }
          groupBy: {
            args: Prisma.ThongbaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThongbaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThongbaoCountArgs<ExtArgs>
            result: $Utils.Optional<ThongbaoCountAggregateOutputType> | number
          }
        }
      }
      Chude: {
        payload: Prisma.$ChudePayload<ExtArgs>
        fields: Prisma.ChudeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChudeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChudeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          findFirst: {
            args: Prisma.ChudeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChudeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          findMany: {
            args: Prisma.ChudeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>[]
          }
          create: {
            args: Prisma.ChudeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          createMany: {
            args: Prisma.ChudeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChudeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          update: {
            args: Prisma.ChudeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          deleteMany: {
            args: Prisma.ChudeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChudeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChudeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChudePayload>
          }
          aggregate: {
            args: Prisma.ChudeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChude>
          }
          groupBy: {
            args: Prisma.ChudeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChudeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChudeCountArgs<ExtArgs>
            result: $Utils.Optional<ChudeCountAggregateOutputType> | number
          }
        }
      }
      CuocTroChuyen: {
        payload: Prisma.$CuocTroChuyenPayload<ExtArgs>
        fields: Prisma.CuocTroChuyenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuocTroChuyenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuocTroChuyenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          findFirst: {
            args: Prisma.CuocTroChuyenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuocTroChuyenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          findMany: {
            args: Prisma.CuocTroChuyenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>[]
          }
          create: {
            args: Prisma.CuocTroChuyenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          createMany: {
            args: Prisma.CuocTroChuyenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuocTroChuyenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          update: {
            args: Prisma.CuocTroChuyenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          deleteMany: {
            args: Prisma.CuocTroChuyenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuocTroChuyenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuocTroChuyenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenPayload>
          }
          aggregate: {
            args: Prisma.CuocTroChuyenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuocTroChuyen>
          }
          groupBy: {
            args: Prisma.CuocTroChuyenGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuocTroChuyenGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuocTroChuyenCountArgs<ExtArgs>
            result: $Utils.Optional<CuocTroChuyenCountAggregateOutputType> | number
          }
        }
      }
      CuocTroChuyenThanhVien: {
        payload: Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>
        fields: Prisma.CuocTroChuyenThanhVienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuocTroChuyenThanhVienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuocTroChuyenThanhVienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          findFirst: {
            args: Prisma.CuocTroChuyenThanhVienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuocTroChuyenThanhVienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          findMany: {
            args: Prisma.CuocTroChuyenThanhVienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>[]
          }
          create: {
            args: Prisma.CuocTroChuyenThanhVienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          createMany: {
            args: Prisma.CuocTroChuyenThanhVienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuocTroChuyenThanhVienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          update: {
            args: Prisma.CuocTroChuyenThanhVienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          deleteMany: {
            args: Prisma.CuocTroChuyenThanhVienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuocTroChuyenThanhVienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuocTroChuyenThanhVienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuocTroChuyenThanhVienPayload>
          }
          aggregate: {
            args: Prisma.CuocTroChuyenThanhVienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuocTroChuyenThanhVien>
          }
          groupBy: {
            args: Prisma.CuocTroChuyenThanhVienGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuocTroChuyenThanhVienGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuocTroChuyenThanhVienCountArgs<ExtArgs>
            result: $Utils.Optional<CuocTroChuyenThanhVienCountAggregateOutputType> | number
          }
        }
      }
      TinNhan: {
        payload: Prisma.$TinNhanPayload<ExtArgs>
        fields: Prisma.TinNhanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TinNhanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TinNhanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          findFirst: {
            args: Prisma.TinNhanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TinNhanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          findMany: {
            args: Prisma.TinNhanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>[]
          }
          create: {
            args: Prisma.TinNhanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          createMany: {
            args: Prisma.TinNhanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TinNhanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          update: {
            args: Prisma.TinNhanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          deleteMany: {
            args: Prisma.TinNhanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TinNhanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TinNhanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TinNhanPayload>
          }
          aggregate: {
            args: Prisma.TinNhanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTinNhan>
          }
          groupBy: {
            args: Prisma.TinNhanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TinNhanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TinNhanCountArgs<ExtArgs>
            result: $Utils.Optional<TinNhanCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    binhluan?: BinhluanOmit
    theodoi?: TheodoiOmit
    baiviet?: BaivietOmit
    yeuthich?: YeuthichOmit
    thongbao?: ThongbaoOmit
    chude?: ChudeOmit
    cuocTroChuyen?: CuocTroChuyenOmit
    cuocTroChuyenThanhVien?: CuocTroChuyenThanhVienOmit
    tinNhan?: TinNhanOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    baiviet: number
    binhluan: number
    thamGiaCuocTroChuyen: number
    dangtheodoi: number
    nguoitheodoi: number
    thongbao: number
    thongbaoDaTao: number
    tinNhanGui: number
    yeuthich: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | UserCountOutputTypeCountBaivietArgs
    binhluan?: boolean | UserCountOutputTypeCountBinhluanArgs
    thamGiaCuocTroChuyen?: boolean | UserCountOutputTypeCountThamGiaCuocTroChuyenArgs
    dangtheodoi?: boolean | UserCountOutputTypeCountDangtheodoiArgs
    nguoitheodoi?: boolean | UserCountOutputTypeCountNguoitheodoiArgs
    thongbao?: boolean | UserCountOutputTypeCountThongbaoArgs
    thongbaoDaTao?: boolean | UserCountOutputTypeCountThongbaoDaTaoArgs
    tinNhanGui?: boolean | UserCountOutputTypeCountTinNhanGuiArgs
    yeuthich?: boolean | UserCountOutputTypeCountYeuthichArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBaivietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaivietWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBinhluanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhluanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThamGiaCuocTroChuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuocTroChuyenThanhVienWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDangtheodoiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheodoiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNguoitheodoiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheodoiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThongbaoDaTaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTinNhanGuiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TinNhanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountYeuthichArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YeuthichWhereInput
  }


  /**
   * Count Type BinhluanCountOutputType
   */

  export type BinhluanCountOutputType = {
    thongbao: number
  }

  export type BinhluanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thongbao?: boolean | BinhluanCountOutputTypeCountThongbaoArgs
  }

  // Custom InputTypes
  /**
   * BinhluanCountOutputType without action
   */
  export type BinhluanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinhluanCountOutputType
     */
    select?: BinhluanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BinhluanCountOutputType without action
   */
  export type BinhluanCountOutputTypeCountThongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
  }


  /**
   * Count Type BaivietCountOutputType
   */

  export type BaivietCountOutputType = {
    binhluan: number
    thongbao: number
    yeuthich: number
  }

  export type BaivietCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    binhluan?: boolean | BaivietCountOutputTypeCountBinhluanArgs
    thongbao?: boolean | BaivietCountOutputTypeCountThongbaoArgs
    yeuthich?: boolean | BaivietCountOutputTypeCountYeuthichArgs
  }

  // Custom InputTypes
  /**
   * BaivietCountOutputType without action
   */
  export type BaivietCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaivietCountOutputType
     */
    select?: BaivietCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaivietCountOutputType without action
   */
  export type BaivietCountOutputTypeCountBinhluanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhluanWhereInput
  }

  /**
   * BaivietCountOutputType without action
   */
  export type BaivietCountOutputTypeCountThongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
  }

  /**
   * BaivietCountOutputType without action
   */
  export type BaivietCountOutputTypeCountYeuthichArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YeuthichWhereInput
  }


  /**
   * Count Type YeuthichCountOutputType
   */

  export type YeuthichCountOutputType = {
    thongbao: number
  }

  export type YeuthichCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thongbao?: boolean | YeuthichCountOutputTypeCountThongbaoArgs
  }

  // Custom InputTypes
  /**
   * YeuthichCountOutputType without action
   */
  export type YeuthichCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YeuthichCountOutputType
     */
    select?: YeuthichCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YeuthichCountOutputType without action
   */
  export type YeuthichCountOutputTypeCountThongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
  }


  /**
   * Count Type ChudeCountOutputType
   */

  export type ChudeCountOutputType = {
    baiviet: number
  }

  export type ChudeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | ChudeCountOutputTypeCountBaivietArgs
  }

  // Custom InputTypes
  /**
   * ChudeCountOutputType without action
   */
  export type ChudeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChudeCountOutputType
     */
    select?: ChudeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChudeCountOutputType without action
   */
  export type ChudeCountOutputTypeCountBaivietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaivietWhereInput
  }


  /**
   * Count Type CuocTroChuyenCountOutputType
   */

  export type CuocTroChuyenCountOutputType = {
    thanhVien: number
    tinNhan: number
  }

  export type CuocTroChuyenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thanhVien?: boolean | CuocTroChuyenCountOutputTypeCountThanhVienArgs
    tinNhan?: boolean | CuocTroChuyenCountOutputTypeCountTinNhanArgs
  }

  // Custom InputTypes
  /**
   * CuocTroChuyenCountOutputType without action
   */
  export type CuocTroChuyenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenCountOutputType
     */
    select?: CuocTroChuyenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuocTroChuyenCountOutputType without action
   */
  export type CuocTroChuyenCountOutputTypeCountThanhVienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuocTroChuyenThanhVienWhereInput
  }

  /**
   * CuocTroChuyenCountOutputType without action
   */
  export type CuocTroChuyenCountOutputTypeCountTinNhanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TinNhanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    clerkId: string | null
    ten: string | null
    tieusu: string | null
    hinhanh: string | null
    diachi: string | null
    website: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    clerkId: string | null
    ten: string | null
    tieusu: string | null
    hinhanh: string | null
    diachi: string | null
    website: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    clerkId: number
    ten: number
    tieusu: number
    hinhanh: number
    diachi: number
    website: number
    ngaytao: number
    ngaycapnhat: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    clerkId?: true
    ten?: true
    tieusu?: true
    hinhanh?: true
    diachi?: true
    website?: true
    ngaytao?: true
    ngaycapnhat?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    clerkId?: true
    ten?: true
    tieusu?: true
    hinhanh?: true
    diachi?: true
    website?: true
    ngaytao?: true
    ngaycapnhat?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    clerkId?: true
    ten?: true
    tieusu?: true
    hinhanh?: true
    diachi?: true
    website?: true
    ngaytao?: true
    ngaycapnhat?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    clerkId: string
    ten: string | null
    tieusu: string | null
    hinhanh: string | null
    diachi: string | null
    website: string | null
    ngaytao: Date
    ngaycapnhat: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    clerkId?: boolean
    ten?: boolean
    tieusu?: boolean
    hinhanh?: boolean
    diachi?: boolean
    website?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    baiviet?: boolean | User$baivietArgs<ExtArgs>
    binhluan?: boolean | User$binhluanArgs<ExtArgs>
    thamGiaCuocTroChuyen?: boolean | User$thamGiaCuocTroChuyenArgs<ExtArgs>
    dangtheodoi?: boolean | User$dangtheodoiArgs<ExtArgs>
    nguoitheodoi?: boolean | User$nguoitheodoiArgs<ExtArgs>
    thongbao?: boolean | User$thongbaoArgs<ExtArgs>
    thongbaoDaTao?: boolean | User$thongbaoDaTaoArgs<ExtArgs>
    tinNhanGui?: boolean | User$tinNhanGuiArgs<ExtArgs>
    yeuthich?: boolean | User$yeuthichArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    clerkId?: boolean
    ten?: boolean
    tieusu?: boolean
    hinhanh?: boolean
    diachi?: boolean
    website?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "clerkId" | "ten" | "tieusu" | "hinhanh" | "diachi" | "website" | "ngaytao" | "ngaycapnhat", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | User$baivietArgs<ExtArgs>
    binhluan?: boolean | User$binhluanArgs<ExtArgs>
    thamGiaCuocTroChuyen?: boolean | User$thamGiaCuocTroChuyenArgs<ExtArgs>
    dangtheodoi?: boolean | User$dangtheodoiArgs<ExtArgs>
    nguoitheodoi?: boolean | User$nguoitheodoiArgs<ExtArgs>
    thongbao?: boolean | User$thongbaoArgs<ExtArgs>
    thongbaoDaTao?: boolean | User$thongbaoDaTaoArgs<ExtArgs>
    tinNhanGui?: boolean | User$tinNhanGuiArgs<ExtArgs>
    yeuthich?: boolean | User$yeuthichArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      baiviet: Prisma.$BaivietPayload<ExtArgs>[]
      binhluan: Prisma.$BinhluanPayload<ExtArgs>[]
      thamGiaCuocTroChuyen: Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>[]
      dangtheodoi: Prisma.$TheodoiPayload<ExtArgs>[]
      nguoitheodoi: Prisma.$TheodoiPayload<ExtArgs>[]
      thongbao: Prisma.$ThongbaoPayload<ExtArgs>[]
      thongbaoDaTao: Prisma.$ThongbaoPayload<ExtArgs>[]
      tinNhanGui: Prisma.$TinNhanPayload<ExtArgs>[]
      yeuthich: Prisma.$YeuthichPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      clerkId: string
      ten: string | null
      tieusu: string | null
      hinhanh: string | null
      diachi: string | null
      website: string | null
      ngaytao: Date
      ngaycapnhat: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baiviet<T extends User$baivietArgs<ExtArgs> = {}>(args?: Subset<T, User$baivietArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    binhluan<T extends User$binhluanArgs<ExtArgs> = {}>(args?: Subset<T, User$binhluanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thamGiaCuocTroChuyen<T extends User$thamGiaCuocTroChuyenArgs<ExtArgs> = {}>(args?: Subset<T, User$thamGiaCuocTroChuyenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dangtheodoi<T extends User$dangtheodoiArgs<ExtArgs> = {}>(args?: Subset<T, User$dangtheodoiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nguoitheodoi<T extends User$nguoitheodoiArgs<ExtArgs> = {}>(args?: Subset<T, User$nguoitheodoiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thongbao<T extends User$thongbaoArgs<ExtArgs> = {}>(args?: Subset<T, User$thongbaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thongbaoDaTao<T extends User$thongbaoDaTaoArgs<ExtArgs> = {}>(args?: Subset<T, User$thongbaoDaTaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tinNhanGui<T extends User$tinNhanGuiArgs<ExtArgs> = {}>(args?: Subset<T, User$tinNhanGuiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    yeuthich<T extends User$yeuthichArgs<ExtArgs> = {}>(args?: Subset<T, User$yeuthichArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly ten: FieldRef<"User", 'String'>
    readonly tieusu: FieldRef<"User", 'String'>
    readonly hinhanh: FieldRef<"User", 'String'>
    readonly diachi: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly ngaytao: FieldRef<"User", 'DateTime'>
    readonly ngaycapnhat: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.baiviet
   */
  export type User$baivietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    where?: BaivietWhereInput
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    cursor?: BaivietWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaivietScalarFieldEnum | BaivietScalarFieldEnum[]
  }

  /**
   * User.binhluan
   */
  export type User$binhluanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    where?: BinhluanWhereInput
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    cursor?: BinhluanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhluanScalarFieldEnum | BinhluanScalarFieldEnum[]
  }

  /**
   * User.thamGiaCuocTroChuyen
   */
  export type User$thamGiaCuocTroChuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    where?: CuocTroChuyenThanhVienWhereInput
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuocTroChuyenThanhVienScalarFieldEnum | CuocTroChuyenThanhVienScalarFieldEnum[]
  }

  /**
   * User.dangtheodoi
   */
  export type User$dangtheodoiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    where?: TheodoiWhereInput
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    cursor?: TheodoiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TheodoiScalarFieldEnum | TheodoiScalarFieldEnum[]
  }

  /**
   * User.nguoitheodoi
   */
  export type User$nguoitheodoiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    where?: TheodoiWhereInput
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    cursor?: TheodoiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TheodoiScalarFieldEnum | TheodoiScalarFieldEnum[]
  }

  /**
   * User.thongbao
   */
  export type User$thongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    cursor?: ThongbaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * User.thongbaoDaTao
   */
  export type User$thongbaoDaTaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    cursor?: ThongbaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * User.tinNhanGui
   */
  export type User$tinNhanGuiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    where?: TinNhanWhereInput
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    cursor?: TinNhanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TinNhanScalarFieldEnum | TinNhanScalarFieldEnum[]
  }

  /**
   * User.yeuthich
   */
  export type User$yeuthichArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    where?: YeuthichWhereInput
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    cursor?: YeuthichWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YeuthichScalarFieldEnum | YeuthichScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Binhluan
   */

  export type AggregateBinhluan = {
    _count: BinhluanCountAggregateOutputType | null
    _avg: BinhluanAvgAggregateOutputType | null
    _sum: BinhluanSumAggregateOutputType | null
    _min: BinhluanMinAggregateOutputType | null
    _max: BinhluanMaxAggregateOutputType | null
  }

  export type BinhluanAvgAggregateOutputType = {
    id: number | null
    baivietID: number | null
    tacgiaID: number | null
  }

  export type BinhluanSumAggregateOutputType = {
    id: number | null
    baivietID: number | null
    tacgiaID: number | null
  }

  export type BinhluanMinAggregateOutputType = {
    id: number | null
    noidung: string | null
    baivietID: number | null
    tacgiaID: number | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
  }

  export type BinhluanMaxAggregateOutputType = {
    id: number | null
    noidung: string | null
    baivietID: number | null
    tacgiaID: number | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
  }

  export type BinhluanCountAggregateOutputType = {
    id: number
    noidung: number
    baivietID: number
    tacgiaID: number
    ngaytao: number
    ngaycapnhat: number
    _all: number
  }


  export type BinhluanAvgAggregateInputType = {
    id?: true
    baivietID?: true
    tacgiaID?: true
  }

  export type BinhluanSumAggregateInputType = {
    id?: true
    baivietID?: true
    tacgiaID?: true
  }

  export type BinhluanMinAggregateInputType = {
    id?: true
    noidung?: true
    baivietID?: true
    tacgiaID?: true
    ngaytao?: true
    ngaycapnhat?: true
  }

  export type BinhluanMaxAggregateInputType = {
    id?: true
    noidung?: true
    baivietID?: true
    tacgiaID?: true
    ngaytao?: true
    ngaycapnhat?: true
  }

  export type BinhluanCountAggregateInputType = {
    id?: true
    noidung?: true
    baivietID?: true
    tacgiaID?: true
    ngaytao?: true
    ngaycapnhat?: true
    _all?: true
  }

  export type BinhluanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Binhluan to aggregate.
     */
    where?: BinhluanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binhluans to fetch.
     */
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinhluanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binhluans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binhluans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Binhluans
    **/
    _count?: true | BinhluanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinhluanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinhluanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinhluanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinhluanMaxAggregateInputType
  }

  export type GetBinhluanAggregateType<T extends BinhluanAggregateArgs> = {
        [P in keyof T & keyof AggregateBinhluan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinhluan[P]>
      : GetScalarType<T[P], AggregateBinhluan[P]>
  }




  export type BinhluanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinhluanWhereInput
    orderBy?: BinhluanOrderByWithAggregationInput | BinhluanOrderByWithAggregationInput[]
    by: BinhluanScalarFieldEnum[] | BinhluanScalarFieldEnum
    having?: BinhluanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinhluanCountAggregateInputType | true
    _avg?: BinhluanAvgAggregateInputType
    _sum?: BinhluanSumAggregateInputType
    _min?: BinhluanMinAggregateInputType
    _max?: BinhluanMaxAggregateInputType
  }

  export type BinhluanGroupByOutputType = {
    id: number
    noidung: string
    baivietID: number
    tacgiaID: number
    ngaytao: Date
    ngaycapnhat: Date
    _count: BinhluanCountAggregateOutputType | null
    _avg: BinhluanAvgAggregateOutputType | null
    _sum: BinhluanSumAggregateOutputType | null
    _min: BinhluanMinAggregateOutputType | null
    _max: BinhluanMaxAggregateOutputType | null
  }

  type GetBinhluanGroupByPayload<T extends BinhluanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinhluanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinhluanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinhluanGroupByOutputType[P]>
            : GetScalarType<T[P], BinhluanGroupByOutputType[P]>
        }
      >
    >


  export type BinhluanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noidung?: boolean
    baivietID?: boolean
    tacgiaID?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    baiviet?: boolean | BaivietDefaultArgs<ExtArgs>
    tacgia?: boolean | UserDefaultArgs<ExtArgs>
    thongbao?: boolean | Binhluan$thongbaoArgs<ExtArgs>
    _count?: boolean | BinhluanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["binhluan"]>



  export type BinhluanSelectScalar = {
    id?: boolean
    noidung?: boolean
    baivietID?: boolean
    tacgiaID?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
  }

  export type BinhluanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noidung" | "baivietID" | "tacgiaID" | "ngaytao" | "ngaycapnhat", ExtArgs["result"]["binhluan"]>
  export type BinhluanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | BaivietDefaultArgs<ExtArgs>
    tacgia?: boolean | UserDefaultArgs<ExtArgs>
    thongbao?: boolean | Binhluan$thongbaoArgs<ExtArgs>
    _count?: boolean | BinhluanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BinhluanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Binhluan"
    objects: {
      baiviet: Prisma.$BaivietPayload<ExtArgs>
      tacgia: Prisma.$UserPayload<ExtArgs>
      thongbao: Prisma.$ThongbaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      noidung: string
      baivietID: number
      tacgiaID: number
      ngaytao: Date
      ngaycapnhat: Date
    }, ExtArgs["result"]["binhluan"]>
    composites: {}
  }

  type BinhluanGetPayload<S extends boolean | null | undefined | BinhluanDefaultArgs> = $Result.GetResult<Prisma.$BinhluanPayload, S>

  type BinhluanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BinhluanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BinhluanCountAggregateInputType | true
    }

  export interface BinhluanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Binhluan'], meta: { name: 'Binhluan' } }
    /**
     * Find zero or one Binhluan that matches the filter.
     * @param {BinhluanFindUniqueArgs} args - Arguments to find a Binhluan
     * @example
     * // Get one Binhluan
     * const binhluan = await prisma.binhluan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BinhluanFindUniqueArgs>(args: SelectSubset<T, BinhluanFindUniqueArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Binhluan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BinhluanFindUniqueOrThrowArgs} args - Arguments to find a Binhluan
     * @example
     * // Get one Binhluan
     * const binhluan = await prisma.binhluan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BinhluanFindUniqueOrThrowArgs>(args: SelectSubset<T, BinhluanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binhluan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanFindFirstArgs} args - Arguments to find a Binhluan
     * @example
     * // Get one Binhluan
     * const binhluan = await prisma.binhluan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BinhluanFindFirstArgs>(args?: SelectSubset<T, BinhluanFindFirstArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Binhluan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanFindFirstOrThrowArgs} args - Arguments to find a Binhluan
     * @example
     * // Get one Binhluan
     * const binhluan = await prisma.binhluan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BinhluanFindFirstOrThrowArgs>(args?: SelectSubset<T, BinhluanFindFirstOrThrowArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Binhluans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Binhluans
     * const binhluans = await prisma.binhluan.findMany()
     * 
     * // Get first 10 Binhluans
     * const binhluans = await prisma.binhluan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binhluanWithIdOnly = await prisma.binhluan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BinhluanFindManyArgs>(args?: SelectSubset<T, BinhluanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Binhluan.
     * @param {BinhluanCreateArgs} args - Arguments to create a Binhluan.
     * @example
     * // Create one Binhluan
     * const Binhluan = await prisma.binhluan.create({
     *   data: {
     *     // ... data to create a Binhluan
     *   }
     * })
     * 
     */
    create<T extends BinhluanCreateArgs>(args: SelectSubset<T, BinhluanCreateArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Binhluans.
     * @param {BinhluanCreateManyArgs} args - Arguments to create many Binhluans.
     * @example
     * // Create many Binhluans
     * const binhluan = await prisma.binhluan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BinhluanCreateManyArgs>(args?: SelectSubset<T, BinhluanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Binhluan.
     * @param {BinhluanDeleteArgs} args - Arguments to delete one Binhluan.
     * @example
     * // Delete one Binhluan
     * const Binhluan = await prisma.binhluan.delete({
     *   where: {
     *     // ... filter to delete one Binhluan
     *   }
     * })
     * 
     */
    delete<T extends BinhluanDeleteArgs>(args: SelectSubset<T, BinhluanDeleteArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Binhluan.
     * @param {BinhluanUpdateArgs} args - Arguments to update one Binhluan.
     * @example
     * // Update one Binhluan
     * const binhluan = await prisma.binhluan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BinhluanUpdateArgs>(args: SelectSubset<T, BinhluanUpdateArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Binhluans.
     * @param {BinhluanDeleteManyArgs} args - Arguments to filter Binhluans to delete.
     * @example
     * // Delete a few Binhluans
     * const { count } = await prisma.binhluan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BinhluanDeleteManyArgs>(args?: SelectSubset<T, BinhluanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Binhluans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Binhluans
     * const binhluan = await prisma.binhluan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BinhluanUpdateManyArgs>(args: SelectSubset<T, BinhluanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Binhluan.
     * @param {BinhluanUpsertArgs} args - Arguments to update or create a Binhluan.
     * @example
     * // Update or create a Binhluan
     * const binhluan = await prisma.binhluan.upsert({
     *   create: {
     *     // ... data to create a Binhluan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Binhluan we want to update
     *   }
     * })
     */
    upsert<T extends BinhluanUpsertArgs>(args: SelectSubset<T, BinhluanUpsertArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Binhluans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanCountArgs} args - Arguments to filter Binhluans to count.
     * @example
     * // Count the number of Binhluans
     * const count = await prisma.binhluan.count({
     *   where: {
     *     // ... the filter for the Binhluans we want to count
     *   }
     * })
    **/
    count<T extends BinhluanCountArgs>(
      args?: Subset<T, BinhluanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinhluanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Binhluan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BinhluanAggregateArgs>(args: Subset<T, BinhluanAggregateArgs>): Prisma.PrismaPromise<GetBinhluanAggregateType<T>>

    /**
     * Group by Binhluan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinhluanGroupByArgs} args - Group by arguments.
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
      T extends BinhluanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinhluanGroupByArgs['orderBy'] }
        : { orderBy?: BinhluanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BinhluanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinhluanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Binhluan model
   */
  readonly fields: BinhluanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Binhluan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinhluanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baiviet<T extends BaivietDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaivietDefaultArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tacgia<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thongbao<T extends Binhluan$thongbaoArgs<ExtArgs> = {}>(args?: Subset<T, Binhluan$thongbaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Binhluan model
   */
  interface BinhluanFieldRefs {
    readonly id: FieldRef<"Binhluan", 'Int'>
    readonly noidung: FieldRef<"Binhluan", 'String'>
    readonly baivietID: FieldRef<"Binhluan", 'Int'>
    readonly tacgiaID: FieldRef<"Binhluan", 'Int'>
    readonly ngaytao: FieldRef<"Binhluan", 'DateTime'>
    readonly ngaycapnhat: FieldRef<"Binhluan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Binhluan findUnique
   */
  export type BinhluanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter, which Binhluan to fetch.
     */
    where: BinhluanWhereUniqueInput
  }

  /**
   * Binhluan findUniqueOrThrow
   */
  export type BinhluanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter, which Binhluan to fetch.
     */
    where: BinhluanWhereUniqueInput
  }

  /**
   * Binhluan findFirst
   */
  export type BinhluanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter, which Binhluan to fetch.
     */
    where?: BinhluanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binhluans to fetch.
     */
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Binhluans.
     */
    cursor?: BinhluanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binhluans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binhluans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Binhluans.
     */
    distinct?: BinhluanScalarFieldEnum | BinhluanScalarFieldEnum[]
  }

  /**
   * Binhluan findFirstOrThrow
   */
  export type BinhluanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter, which Binhluan to fetch.
     */
    where?: BinhluanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binhluans to fetch.
     */
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Binhluans.
     */
    cursor?: BinhluanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binhluans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binhluans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Binhluans.
     */
    distinct?: BinhluanScalarFieldEnum | BinhluanScalarFieldEnum[]
  }

  /**
   * Binhluan findMany
   */
  export type BinhluanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter, which Binhluans to fetch.
     */
    where?: BinhluanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Binhluans to fetch.
     */
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Binhluans.
     */
    cursor?: BinhluanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Binhluans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Binhluans.
     */
    skip?: number
    distinct?: BinhluanScalarFieldEnum | BinhluanScalarFieldEnum[]
  }

  /**
   * Binhluan create
   */
  export type BinhluanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * The data needed to create a Binhluan.
     */
    data: XOR<BinhluanCreateInput, BinhluanUncheckedCreateInput>
  }

  /**
   * Binhluan createMany
   */
  export type BinhluanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Binhluans.
     */
    data: BinhluanCreateManyInput | BinhluanCreateManyInput[]
  }

  /**
   * Binhluan update
   */
  export type BinhluanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * The data needed to update a Binhluan.
     */
    data: XOR<BinhluanUpdateInput, BinhluanUncheckedUpdateInput>
    /**
     * Choose, which Binhluan to update.
     */
    where: BinhluanWhereUniqueInput
  }

  /**
   * Binhluan updateMany
   */
  export type BinhluanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Binhluans.
     */
    data: XOR<BinhluanUpdateManyMutationInput, BinhluanUncheckedUpdateManyInput>
    /**
     * Filter which Binhluans to update
     */
    where?: BinhluanWhereInput
    /**
     * Limit how many Binhluans to update.
     */
    limit?: number
  }

  /**
   * Binhluan upsert
   */
  export type BinhluanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * The filter to search for the Binhluan to update in case it exists.
     */
    where: BinhluanWhereUniqueInput
    /**
     * In case the Binhluan found by the `where` argument doesn't exist, create a new Binhluan with this data.
     */
    create: XOR<BinhluanCreateInput, BinhluanUncheckedCreateInput>
    /**
     * In case the Binhluan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinhluanUpdateInput, BinhluanUncheckedUpdateInput>
  }

  /**
   * Binhluan delete
   */
  export type BinhluanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    /**
     * Filter which Binhluan to delete.
     */
    where: BinhluanWhereUniqueInput
  }

  /**
   * Binhluan deleteMany
   */
  export type BinhluanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Binhluans to delete
     */
    where?: BinhluanWhereInput
    /**
     * Limit how many Binhluans to delete.
     */
    limit?: number
  }

  /**
   * Binhluan.thongbao
   */
  export type Binhluan$thongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    cursor?: ThongbaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Binhluan without action
   */
  export type BinhluanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
  }


  /**
   * Model Theodoi
   */

  export type AggregateTheodoi = {
    _count: TheodoiCountAggregateOutputType | null
    _avg: TheodoiAvgAggregateOutputType | null
    _sum: TheodoiSumAggregateOutputType | null
    _min: TheodoiMinAggregateOutputType | null
    _max: TheodoiMaxAggregateOutputType | null
  }

  export type TheodoiAvgAggregateOutputType = {
    id: number | null
    nguoidangtheodoiID: number | null
    nguoitheodoiID: number | null
  }

  export type TheodoiSumAggregateOutputType = {
    id: number | null
    nguoidangtheodoiID: number | null
    nguoitheodoiID: number | null
  }

  export type TheodoiMinAggregateOutputType = {
    id: number | null
    nguoidangtheodoiID: number | null
    nguoitheodoiID: number | null
    ngaytao: Date | null
  }

  export type TheodoiMaxAggregateOutputType = {
    id: number | null
    nguoidangtheodoiID: number | null
    nguoitheodoiID: number | null
    ngaytao: Date | null
  }

  export type TheodoiCountAggregateOutputType = {
    id: number
    nguoidangtheodoiID: number
    nguoitheodoiID: number
    ngaytao: number
    _all: number
  }


  export type TheodoiAvgAggregateInputType = {
    id?: true
    nguoidangtheodoiID?: true
    nguoitheodoiID?: true
  }

  export type TheodoiSumAggregateInputType = {
    id?: true
    nguoidangtheodoiID?: true
    nguoitheodoiID?: true
  }

  export type TheodoiMinAggregateInputType = {
    id?: true
    nguoidangtheodoiID?: true
    nguoitheodoiID?: true
    ngaytao?: true
  }

  export type TheodoiMaxAggregateInputType = {
    id?: true
    nguoidangtheodoiID?: true
    nguoitheodoiID?: true
    ngaytao?: true
  }

  export type TheodoiCountAggregateInputType = {
    id?: true
    nguoidangtheodoiID?: true
    nguoitheodoiID?: true
    ngaytao?: true
    _all?: true
  }

  export type TheodoiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theodoi to aggregate.
     */
    where?: TheodoiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theodois to fetch.
     */
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TheodoiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theodois from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theodois.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Theodois
    **/
    _count?: true | TheodoiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TheodoiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TheodoiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TheodoiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TheodoiMaxAggregateInputType
  }

  export type GetTheodoiAggregateType<T extends TheodoiAggregateArgs> = {
        [P in keyof T & keyof AggregateTheodoi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheodoi[P]>
      : GetScalarType<T[P], AggregateTheodoi[P]>
  }




  export type TheodoiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheodoiWhereInput
    orderBy?: TheodoiOrderByWithAggregationInput | TheodoiOrderByWithAggregationInput[]
    by: TheodoiScalarFieldEnum[] | TheodoiScalarFieldEnum
    having?: TheodoiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TheodoiCountAggregateInputType | true
    _avg?: TheodoiAvgAggregateInputType
    _sum?: TheodoiSumAggregateInputType
    _min?: TheodoiMinAggregateInputType
    _max?: TheodoiMaxAggregateInputType
  }

  export type TheodoiGroupByOutputType = {
    id: number
    nguoidangtheodoiID: number
    nguoitheodoiID: number
    ngaytao: Date
    _count: TheodoiCountAggregateOutputType | null
    _avg: TheodoiAvgAggregateOutputType | null
    _sum: TheodoiSumAggregateOutputType | null
    _min: TheodoiMinAggregateOutputType | null
    _max: TheodoiMaxAggregateOutputType | null
  }

  type GetTheodoiGroupByPayload<T extends TheodoiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TheodoiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TheodoiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TheodoiGroupByOutputType[P]>
            : GetScalarType<T[P], TheodoiGroupByOutputType[P]>
        }
      >
    >


  export type TheodoiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nguoidangtheodoiID?: boolean
    nguoitheodoiID?: boolean
    ngaytao?: boolean
    nguoiTheoDoi?: boolean | UserDefaultArgs<ExtArgs>
    nguoiDuocTheoDoi?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theodoi"]>



  export type TheodoiSelectScalar = {
    id?: boolean
    nguoidangtheodoiID?: boolean
    nguoitheodoiID?: boolean
    ngaytao?: boolean
  }

  export type TheodoiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nguoidangtheodoiID" | "nguoitheodoiID" | "ngaytao", ExtArgs["result"]["theodoi"]>
  export type TheodoiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nguoiTheoDoi?: boolean | UserDefaultArgs<ExtArgs>
    nguoiDuocTheoDoi?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TheodoiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theodoi"
    objects: {
      nguoiTheoDoi: Prisma.$UserPayload<ExtArgs>
      nguoiDuocTheoDoi: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nguoidangtheodoiID: number
      nguoitheodoiID: number
      ngaytao: Date
    }, ExtArgs["result"]["theodoi"]>
    composites: {}
  }

  type TheodoiGetPayload<S extends boolean | null | undefined | TheodoiDefaultArgs> = $Result.GetResult<Prisma.$TheodoiPayload, S>

  type TheodoiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TheodoiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TheodoiCountAggregateInputType | true
    }

  export interface TheodoiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theodoi'], meta: { name: 'Theodoi' } }
    /**
     * Find zero or one Theodoi that matches the filter.
     * @param {TheodoiFindUniqueArgs} args - Arguments to find a Theodoi
     * @example
     * // Get one Theodoi
     * const theodoi = await prisma.theodoi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TheodoiFindUniqueArgs>(args: SelectSubset<T, TheodoiFindUniqueArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theodoi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TheodoiFindUniqueOrThrowArgs} args - Arguments to find a Theodoi
     * @example
     * // Get one Theodoi
     * const theodoi = await prisma.theodoi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TheodoiFindUniqueOrThrowArgs>(args: SelectSubset<T, TheodoiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theodoi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiFindFirstArgs} args - Arguments to find a Theodoi
     * @example
     * // Get one Theodoi
     * const theodoi = await prisma.theodoi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TheodoiFindFirstArgs>(args?: SelectSubset<T, TheodoiFindFirstArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theodoi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiFindFirstOrThrowArgs} args - Arguments to find a Theodoi
     * @example
     * // Get one Theodoi
     * const theodoi = await prisma.theodoi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TheodoiFindFirstOrThrowArgs>(args?: SelectSubset<T, TheodoiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theodois that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theodois
     * const theodois = await prisma.theodoi.findMany()
     * 
     * // Get first 10 Theodois
     * const theodois = await prisma.theodoi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const theodoiWithIdOnly = await prisma.theodoi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TheodoiFindManyArgs>(args?: SelectSubset<T, TheodoiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theodoi.
     * @param {TheodoiCreateArgs} args - Arguments to create a Theodoi.
     * @example
     * // Create one Theodoi
     * const Theodoi = await prisma.theodoi.create({
     *   data: {
     *     // ... data to create a Theodoi
     *   }
     * })
     * 
     */
    create<T extends TheodoiCreateArgs>(args: SelectSubset<T, TheodoiCreateArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theodois.
     * @param {TheodoiCreateManyArgs} args - Arguments to create many Theodois.
     * @example
     * // Create many Theodois
     * const theodoi = await prisma.theodoi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TheodoiCreateManyArgs>(args?: SelectSubset<T, TheodoiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theodoi.
     * @param {TheodoiDeleteArgs} args - Arguments to delete one Theodoi.
     * @example
     * // Delete one Theodoi
     * const Theodoi = await prisma.theodoi.delete({
     *   where: {
     *     // ... filter to delete one Theodoi
     *   }
     * })
     * 
     */
    delete<T extends TheodoiDeleteArgs>(args: SelectSubset<T, TheodoiDeleteArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theodoi.
     * @param {TheodoiUpdateArgs} args - Arguments to update one Theodoi.
     * @example
     * // Update one Theodoi
     * const theodoi = await prisma.theodoi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TheodoiUpdateArgs>(args: SelectSubset<T, TheodoiUpdateArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theodois.
     * @param {TheodoiDeleteManyArgs} args - Arguments to filter Theodois to delete.
     * @example
     * // Delete a few Theodois
     * const { count } = await prisma.theodoi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TheodoiDeleteManyArgs>(args?: SelectSubset<T, TheodoiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theodois.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theodois
     * const theodoi = await prisma.theodoi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TheodoiUpdateManyArgs>(args: SelectSubset<T, TheodoiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theodoi.
     * @param {TheodoiUpsertArgs} args - Arguments to update or create a Theodoi.
     * @example
     * // Update or create a Theodoi
     * const theodoi = await prisma.theodoi.upsert({
     *   create: {
     *     // ... data to create a Theodoi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theodoi we want to update
     *   }
     * })
     */
    upsert<T extends TheodoiUpsertArgs>(args: SelectSubset<T, TheodoiUpsertArgs<ExtArgs>>): Prisma__TheodoiClient<$Result.GetResult<Prisma.$TheodoiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theodois.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiCountArgs} args - Arguments to filter Theodois to count.
     * @example
     * // Count the number of Theodois
     * const count = await prisma.theodoi.count({
     *   where: {
     *     // ... the filter for the Theodois we want to count
     *   }
     * })
    **/
    count<T extends TheodoiCountArgs>(
      args?: Subset<T, TheodoiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TheodoiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theodoi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TheodoiAggregateArgs>(args: Subset<T, TheodoiAggregateArgs>): Prisma.PrismaPromise<GetTheodoiAggregateType<T>>

    /**
     * Group by Theodoi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheodoiGroupByArgs} args - Group by arguments.
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
      T extends TheodoiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TheodoiGroupByArgs['orderBy'] }
        : { orderBy?: TheodoiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TheodoiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTheodoiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theodoi model
   */
  readonly fields: TheodoiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theodoi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TheodoiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nguoiTheoDoi<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoiDuocTheoDoi<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Theodoi model
   */
  interface TheodoiFieldRefs {
    readonly id: FieldRef<"Theodoi", 'Int'>
    readonly nguoidangtheodoiID: FieldRef<"Theodoi", 'Int'>
    readonly nguoitheodoiID: FieldRef<"Theodoi", 'Int'>
    readonly ngaytao: FieldRef<"Theodoi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Theodoi findUnique
   */
  export type TheodoiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter, which Theodoi to fetch.
     */
    where: TheodoiWhereUniqueInput
  }

  /**
   * Theodoi findUniqueOrThrow
   */
  export type TheodoiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter, which Theodoi to fetch.
     */
    where: TheodoiWhereUniqueInput
  }

  /**
   * Theodoi findFirst
   */
  export type TheodoiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter, which Theodoi to fetch.
     */
    where?: TheodoiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theodois to fetch.
     */
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theodois.
     */
    cursor?: TheodoiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theodois from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theodois.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theodois.
     */
    distinct?: TheodoiScalarFieldEnum | TheodoiScalarFieldEnum[]
  }

  /**
   * Theodoi findFirstOrThrow
   */
  export type TheodoiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter, which Theodoi to fetch.
     */
    where?: TheodoiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theodois to fetch.
     */
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theodois.
     */
    cursor?: TheodoiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theodois from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theodois.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theodois.
     */
    distinct?: TheodoiScalarFieldEnum | TheodoiScalarFieldEnum[]
  }

  /**
   * Theodoi findMany
   */
  export type TheodoiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter, which Theodois to fetch.
     */
    where?: TheodoiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theodois to fetch.
     */
    orderBy?: TheodoiOrderByWithRelationInput | TheodoiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Theodois.
     */
    cursor?: TheodoiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theodois from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theodois.
     */
    skip?: number
    distinct?: TheodoiScalarFieldEnum | TheodoiScalarFieldEnum[]
  }

  /**
   * Theodoi create
   */
  export type TheodoiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * The data needed to create a Theodoi.
     */
    data: XOR<TheodoiCreateInput, TheodoiUncheckedCreateInput>
  }

  /**
   * Theodoi createMany
   */
  export type TheodoiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Theodois.
     */
    data: TheodoiCreateManyInput | TheodoiCreateManyInput[]
  }

  /**
   * Theodoi update
   */
  export type TheodoiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * The data needed to update a Theodoi.
     */
    data: XOR<TheodoiUpdateInput, TheodoiUncheckedUpdateInput>
    /**
     * Choose, which Theodoi to update.
     */
    where: TheodoiWhereUniqueInput
  }

  /**
   * Theodoi updateMany
   */
  export type TheodoiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Theodois.
     */
    data: XOR<TheodoiUpdateManyMutationInput, TheodoiUncheckedUpdateManyInput>
    /**
     * Filter which Theodois to update
     */
    where?: TheodoiWhereInput
    /**
     * Limit how many Theodois to update.
     */
    limit?: number
  }

  /**
   * Theodoi upsert
   */
  export type TheodoiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * The filter to search for the Theodoi to update in case it exists.
     */
    where: TheodoiWhereUniqueInput
    /**
     * In case the Theodoi found by the `where` argument doesn't exist, create a new Theodoi with this data.
     */
    create: XOR<TheodoiCreateInput, TheodoiUncheckedCreateInput>
    /**
     * In case the Theodoi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TheodoiUpdateInput, TheodoiUncheckedUpdateInput>
  }

  /**
   * Theodoi delete
   */
  export type TheodoiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
    /**
     * Filter which Theodoi to delete.
     */
    where: TheodoiWhereUniqueInput
  }

  /**
   * Theodoi deleteMany
   */
  export type TheodoiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theodois to delete
     */
    where?: TheodoiWhereInput
    /**
     * Limit how many Theodois to delete.
     */
    limit?: number
  }

  /**
   * Theodoi without action
   */
  export type TheodoiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theodoi
     */
    select?: TheodoiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theodoi
     */
    omit?: TheodoiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheodoiInclude<ExtArgs> | null
  }


  /**
   * Model Baiviet
   */

  export type AggregateBaiviet = {
    _count: BaivietCountAggregateOutputType | null
    _avg: BaivietAvgAggregateOutputType | null
    _sum: BaivietSumAggregateOutputType | null
    _min: BaivietMinAggregateOutputType | null
    _max: BaivietMaxAggregateOutputType | null
  }

  export type BaivietAvgAggregateOutputType = {
    id: number | null
    tacgiaID: number | null
    chudeID: number | null
  }

  export type BaivietSumAggregateOutputType = {
    id: number | null
    tacgiaID: number | null
    chudeID: number | null
  }

  export type BaivietMinAggregateOutputType = {
    id: number | null
    tacgiaID: number | null
    noidung: string | null
    hinhanh: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
    chudeID: number | null
  }

  export type BaivietMaxAggregateOutputType = {
    id: number | null
    tacgiaID: number | null
    noidung: string | null
    hinhanh: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
    chudeID: number | null
  }

  export type BaivietCountAggregateOutputType = {
    id: number
    tacgiaID: number
    noidung: number
    hinhanh: number
    ngaytao: number
    ngaycapnhat: number
    chudeID: number
    _all: number
  }


  export type BaivietAvgAggregateInputType = {
    id?: true
    tacgiaID?: true
    chudeID?: true
  }

  export type BaivietSumAggregateInputType = {
    id?: true
    tacgiaID?: true
    chudeID?: true
  }

  export type BaivietMinAggregateInputType = {
    id?: true
    tacgiaID?: true
    noidung?: true
    hinhanh?: true
    ngaytao?: true
    ngaycapnhat?: true
    chudeID?: true
  }

  export type BaivietMaxAggregateInputType = {
    id?: true
    tacgiaID?: true
    noidung?: true
    hinhanh?: true
    ngaytao?: true
    ngaycapnhat?: true
    chudeID?: true
  }

  export type BaivietCountAggregateInputType = {
    id?: true
    tacgiaID?: true
    noidung?: true
    hinhanh?: true
    ngaytao?: true
    ngaycapnhat?: true
    chudeID?: true
    _all?: true
  }

  export type BaivietAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baiviet to aggregate.
     */
    where?: BaivietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baiviets to fetch.
     */
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaivietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baiviets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baiviets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Baiviets
    **/
    _count?: true | BaivietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaivietAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaivietSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaivietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaivietMaxAggregateInputType
  }

  export type GetBaivietAggregateType<T extends BaivietAggregateArgs> = {
        [P in keyof T & keyof AggregateBaiviet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaiviet[P]>
      : GetScalarType<T[P], AggregateBaiviet[P]>
  }




  export type BaivietGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaivietWhereInput
    orderBy?: BaivietOrderByWithAggregationInput | BaivietOrderByWithAggregationInput[]
    by: BaivietScalarFieldEnum[] | BaivietScalarFieldEnum
    having?: BaivietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaivietCountAggregateInputType | true
    _avg?: BaivietAvgAggregateInputType
    _sum?: BaivietSumAggregateInputType
    _min?: BaivietMinAggregateInputType
    _max?: BaivietMaxAggregateInputType
  }

  export type BaivietGroupByOutputType = {
    id: number
    tacgiaID: number
    noidung: string | null
    hinhanh: string | null
    ngaytao: Date
    ngaycapnhat: Date
    chudeID: number
    _count: BaivietCountAggregateOutputType | null
    _avg: BaivietAvgAggregateOutputType | null
    _sum: BaivietSumAggregateOutputType | null
    _min: BaivietMinAggregateOutputType | null
    _max: BaivietMaxAggregateOutputType | null
  }

  type GetBaivietGroupByPayload<T extends BaivietGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaivietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaivietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaivietGroupByOutputType[P]>
            : GetScalarType<T[P], BaivietGroupByOutputType[P]>
        }
      >
    >


  export type BaivietSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tacgiaID?: boolean
    noidung?: boolean
    hinhanh?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    chudeID?: boolean
    chude?: boolean | ChudeDefaultArgs<ExtArgs>
    tacgia?: boolean | UserDefaultArgs<ExtArgs>
    binhluan?: boolean | Baiviet$binhluanArgs<ExtArgs>
    thongbao?: boolean | Baiviet$thongbaoArgs<ExtArgs>
    yeuthich?: boolean | Baiviet$yeuthichArgs<ExtArgs>
    _count?: boolean | BaivietCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baiviet"]>



  export type BaivietSelectScalar = {
    id?: boolean
    tacgiaID?: boolean
    noidung?: boolean
    hinhanh?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    chudeID?: boolean
  }

  export type BaivietOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tacgiaID" | "noidung" | "hinhanh" | "ngaytao" | "ngaycapnhat" | "chudeID", ExtArgs["result"]["baiviet"]>
  export type BaivietInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chude?: boolean | ChudeDefaultArgs<ExtArgs>
    tacgia?: boolean | UserDefaultArgs<ExtArgs>
    binhluan?: boolean | Baiviet$binhluanArgs<ExtArgs>
    thongbao?: boolean | Baiviet$thongbaoArgs<ExtArgs>
    yeuthich?: boolean | Baiviet$yeuthichArgs<ExtArgs>
    _count?: boolean | BaivietCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BaivietPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Baiviet"
    objects: {
      chude: Prisma.$ChudePayload<ExtArgs>
      tacgia: Prisma.$UserPayload<ExtArgs>
      binhluan: Prisma.$BinhluanPayload<ExtArgs>[]
      thongbao: Prisma.$ThongbaoPayload<ExtArgs>[]
      yeuthich: Prisma.$YeuthichPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tacgiaID: number
      noidung: string | null
      hinhanh: string | null
      ngaytao: Date
      ngaycapnhat: Date
      chudeID: number
    }, ExtArgs["result"]["baiviet"]>
    composites: {}
  }

  type BaivietGetPayload<S extends boolean | null | undefined | BaivietDefaultArgs> = $Result.GetResult<Prisma.$BaivietPayload, S>

  type BaivietCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaivietFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaivietCountAggregateInputType | true
    }

  export interface BaivietDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Baiviet'], meta: { name: 'Baiviet' } }
    /**
     * Find zero or one Baiviet that matches the filter.
     * @param {BaivietFindUniqueArgs} args - Arguments to find a Baiviet
     * @example
     * // Get one Baiviet
     * const baiviet = await prisma.baiviet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaivietFindUniqueArgs>(args: SelectSubset<T, BaivietFindUniqueArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baiviet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaivietFindUniqueOrThrowArgs} args - Arguments to find a Baiviet
     * @example
     * // Get one Baiviet
     * const baiviet = await prisma.baiviet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaivietFindUniqueOrThrowArgs>(args: SelectSubset<T, BaivietFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baiviet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietFindFirstArgs} args - Arguments to find a Baiviet
     * @example
     * // Get one Baiviet
     * const baiviet = await prisma.baiviet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaivietFindFirstArgs>(args?: SelectSubset<T, BaivietFindFirstArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baiviet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietFindFirstOrThrowArgs} args - Arguments to find a Baiviet
     * @example
     * // Get one Baiviet
     * const baiviet = await prisma.baiviet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaivietFindFirstOrThrowArgs>(args?: SelectSubset<T, BaivietFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Baiviets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Baiviets
     * const baiviets = await prisma.baiviet.findMany()
     * 
     * // Get first 10 Baiviets
     * const baiviets = await prisma.baiviet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baivietWithIdOnly = await prisma.baiviet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaivietFindManyArgs>(args?: SelectSubset<T, BaivietFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baiviet.
     * @param {BaivietCreateArgs} args - Arguments to create a Baiviet.
     * @example
     * // Create one Baiviet
     * const Baiviet = await prisma.baiviet.create({
     *   data: {
     *     // ... data to create a Baiviet
     *   }
     * })
     * 
     */
    create<T extends BaivietCreateArgs>(args: SelectSubset<T, BaivietCreateArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Baiviets.
     * @param {BaivietCreateManyArgs} args - Arguments to create many Baiviets.
     * @example
     * // Create many Baiviets
     * const baiviet = await prisma.baiviet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaivietCreateManyArgs>(args?: SelectSubset<T, BaivietCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Baiviet.
     * @param {BaivietDeleteArgs} args - Arguments to delete one Baiviet.
     * @example
     * // Delete one Baiviet
     * const Baiviet = await prisma.baiviet.delete({
     *   where: {
     *     // ... filter to delete one Baiviet
     *   }
     * })
     * 
     */
    delete<T extends BaivietDeleteArgs>(args: SelectSubset<T, BaivietDeleteArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baiviet.
     * @param {BaivietUpdateArgs} args - Arguments to update one Baiviet.
     * @example
     * // Update one Baiviet
     * const baiviet = await prisma.baiviet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaivietUpdateArgs>(args: SelectSubset<T, BaivietUpdateArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Baiviets.
     * @param {BaivietDeleteManyArgs} args - Arguments to filter Baiviets to delete.
     * @example
     * // Delete a few Baiviets
     * const { count } = await prisma.baiviet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaivietDeleteManyArgs>(args?: SelectSubset<T, BaivietDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Baiviets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Baiviets
     * const baiviet = await prisma.baiviet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaivietUpdateManyArgs>(args: SelectSubset<T, BaivietUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Baiviet.
     * @param {BaivietUpsertArgs} args - Arguments to update or create a Baiviet.
     * @example
     * // Update or create a Baiviet
     * const baiviet = await prisma.baiviet.upsert({
     *   create: {
     *     // ... data to create a Baiviet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baiviet we want to update
     *   }
     * })
     */
    upsert<T extends BaivietUpsertArgs>(args: SelectSubset<T, BaivietUpsertArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Baiviets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietCountArgs} args - Arguments to filter Baiviets to count.
     * @example
     * // Count the number of Baiviets
     * const count = await prisma.baiviet.count({
     *   where: {
     *     // ... the filter for the Baiviets we want to count
     *   }
     * })
    **/
    count<T extends BaivietCountArgs>(
      args?: Subset<T, BaivietCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaivietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baiviet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BaivietAggregateArgs>(args: Subset<T, BaivietAggregateArgs>): Prisma.PrismaPromise<GetBaivietAggregateType<T>>

    /**
     * Group by Baiviet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaivietGroupByArgs} args - Group by arguments.
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
      T extends BaivietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaivietGroupByArgs['orderBy'] }
        : { orderBy?: BaivietGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BaivietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaivietGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Baiviet model
   */
  readonly fields: BaivietFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Baiviet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaivietClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chude<T extends ChudeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChudeDefaultArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tacgia<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    binhluan<T extends Baiviet$binhluanArgs<ExtArgs> = {}>(args?: Subset<T, Baiviet$binhluanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thongbao<T extends Baiviet$thongbaoArgs<ExtArgs> = {}>(args?: Subset<T, Baiviet$thongbaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    yeuthich<T extends Baiviet$yeuthichArgs<ExtArgs> = {}>(args?: Subset<T, Baiviet$yeuthichArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Baiviet model
   */
  interface BaivietFieldRefs {
    readonly id: FieldRef<"Baiviet", 'Int'>
    readonly tacgiaID: FieldRef<"Baiviet", 'Int'>
    readonly noidung: FieldRef<"Baiviet", 'String'>
    readonly hinhanh: FieldRef<"Baiviet", 'String'>
    readonly ngaytao: FieldRef<"Baiviet", 'DateTime'>
    readonly ngaycapnhat: FieldRef<"Baiviet", 'DateTime'>
    readonly chudeID: FieldRef<"Baiviet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Baiviet findUnique
   */
  export type BaivietFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter, which Baiviet to fetch.
     */
    where: BaivietWhereUniqueInput
  }

  /**
   * Baiviet findUniqueOrThrow
   */
  export type BaivietFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter, which Baiviet to fetch.
     */
    where: BaivietWhereUniqueInput
  }

  /**
   * Baiviet findFirst
   */
  export type BaivietFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter, which Baiviet to fetch.
     */
    where?: BaivietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baiviets to fetch.
     */
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Baiviets.
     */
    cursor?: BaivietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baiviets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baiviets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Baiviets.
     */
    distinct?: BaivietScalarFieldEnum | BaivietScalarFieldEnum[]
  }

  /**
   * Baiviet findFirstOrThrow
   */
  export type BaivietFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter, which Baiviet to fetch.
     */
    where?: BaivietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baiviets to fetch.
     */
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Baiviets.
     */
    cursor?: BaivietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baiviets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baiviets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Baiviets.
     */
    distinct?: BaivietScalarFieldEnum | BaivietScalarFieldEnum[]
  }

  /**
   * Baiviet findMany
   */
  export type BaivietFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter, which Baiviets to fetch.
     */
    where?: BaivietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Baiviets to fetch.
     */
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Baiviets.
     */
    cursor?: BaivietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Baiviets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Baiviets.
     */
    skip?: number
    distinct?: BaivietScalarFieldEnum | BaivietScalarFieldEnum[]
  }

  /**
   * Baiviet create
   */
  export type BaivietCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * The data needed to create a Baiviet.
     */
    data: XOR<BaivietCreateInput, BaivietUncheckedCreateInput>
  }

  /**
   * Baiviet createMany
   */
  export type BaivietCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Baiviets.
     */
    data: BaivietCreateManyInput | BaivietCreateManyInput[]
  }

  /**
   * Baiviet update
   */
  export type BaivietUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * The data needed to update a Baiviet.
     */
    data: XOR<BaivietUpdateInput, BaivietUncheckedUpdateInput>
    /**
     * Choose, which Baiviet to update.
     */
    where: BaivietWhereUniqueInput
  }

  /**
   * Baiviet updateMany
   */
  export type BaivietUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Baiviets.
     */
    data: XOR<BaivietUpdateManyMutationInput, BaivietUncheckedUpdateManyInput>
    /**
     * Filter which Baiviets to update
     */
    where?: BaivietWhereInput
    /**
     * Limit how many Baiviets to update.
     */
    limit?: number
  }

  /**
   * Baiviet upsert
   */
  export type BaivietUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * The filter to search for the Baiviet to update in case it exists.
     */
    where: BaivietWhereUniqueInput
    /**
     * In case the Baiviet found by the `where` argument doesn't exist, create a new Baiviet with this data.
     */
    create: XOR<BaivietCreateInput, BaivietUncheckedCreateInput>
    /**
     * In case the Baiviet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaivietUpdateInput, BaivietUncheckedUpdateInput>
  }

  /**
   * Baiviet delete
   */
  export type BaivietDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    /**
     * Filter which Baiviet to delete.
     */
    where: BaivietWhereUniqueInput
  }

  /**
   * Baiviet deleteMany
   */
  export type BaivietDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baiviets to delete
     */
    where?: BaivietWhereInput
    /**
     * Limit how many Baiviets to delete.
     */
    limit?: number
  }

  /**
   * Baiviet.binhluan
   */
  export type Baiviet$binhluanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    where?: BinhluanWhereInput
    orderBy?: BinhluanOrderByWithRelationInput | BinhluanOrderByWithRelationInput[]
    cursor?: BinhluanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BinhluanScalarFieldEnum | BinhluanScalarFieldEnum[]
  }

  /**
   * Baiviet.thongbao
   */
  export type Baiviet$thongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    cursor?: ThongbaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Baiviet.yeuthich
   */
  export type Baiviet$yeuthichArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    where?: YeuthichWhereInput
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    cursor?: YeuthichWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YeuthichScalarFieldEnum | YeuthichScalarFieldEnum[]
  }

  /**
   * Baiviet without action
   */
  export type BaivietDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
  }


  /**
   * Model Yeuthich
   */

  export type AggregateYeuthich = {
    _count: YeuthichCountAggregateOutputType | null
    _avg: YeuthichAvgAggregateOutputType | null
    _sum: YeuthichSumAggregateOutputType | null
    _min: YeuthichMinAggregateOutputType | null
    _max: YeuthichMaxAggregateOutputType | null
  }

  export type YeuthichAvgAggregateOutputType = {
    id: number | null
    baivietID: number | null
    nguoidungID: number | null
  }

  export type YeuthichSumAggregateOutputType = {
    id: number | null
    baivietID: number | null
    nguoidungID: number | null
  }

  export type YeuthichMinAggregateOutputType = {
    id: number | null
    baivietID: number | null
    nguoidungID: number | null
    ngaytao: Date | null
  }

  export type YeuthichMaxAggregateOutputType = {
    id: number | null
    baivietID: number | null
    nguoidungID: number | null
    ngaytao: Date | null
  }

  export type YeuthichCountAggregateOutputType = {
    id: number
    baivietID: number
    nguoidungID: number
    ngaytao: number
    _all: number
  }


  export type YeuthichAvgAggregateInputType = {
    id?: true
    baivietID?: true
    nguoidungID?: true
  }

  export type YeuthichSumAggregateInputType = {
    id?: true
    baivietID?: true
    nguoidungID?: true
  }

  export type YeuthichMinAggregateInputType = {
    id?: true
    baivietID?: true
    nguoidungID?: true
    ngaytao?: true
  }

  export type YeuthichMaxAggregateInputType = {
    id?: true
    baivietID?: true
    nguoidungID?: true
    ngaytao?: true
  }

  export type YeuthichCountAggregateInputType = {
    id?: true
    baivietID?: true
    nguoidungID?: true
    ngaytao?: true
    _all?: true
  }

  export type YeuthichAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yeuthich to aggregate.
     */
    where?: YeuthichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yeuthiches to fetch.
     */
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YeuthichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yeuthiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yeuthiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Yeuthiches
    **/
    _count?: true | YeuthichCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YeuthichAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YeuthichSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YeuthichMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YeuthichMaxAggregateInputType
  }

  export type GetYeuthichAggregateType<T extends YeuthichAggregateArgs> = {
        [P in keyof T & keyof AggregateYeuthich]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYeuthich[P]>
      : GetScalarType<T[P], AggregateYeuthich[P]>
  }




  export type YeuthichGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YeuthichWhereInput
    orderBy?: YeuthichOrderByWithAggregationInput | YeuthichOrderByWithAggregationInput[]
    by: YeuthichScalarFieldEnum[] | YeuthichScalarFieldEnum
    having?: YeuthichScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YeuthichCountAggregateInputType | true
    _avg?: YeuthichAvgAggregateInputType
    _sum?: YeuthichSumAggregateInputType
    _min?: YeuthichMinAggregateInputType
    _max?: YeuthichMaxAggregateInputType
  }

  export type YeuthichGroupByOutputType = {
    id: number
    baivietID: number
    nguoidungID: number
    ngaytao: Date
    _count: YeuthichCountAggregateOutputType | null
    _avg: YeuthichAvgAggregateOutputType | null
    _sum: YeuthichSumAggregateOutputType | null
    _min: YeuthichMinAggregateOutputType | null
    _max: YeuthichMaxAggregateOutputType | null
  }

  type GetYeuthichGroupByPayload<T extends YeuthichGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YeuthichGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YeuthichGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YeuthichGroupByOutputType[P]>
            : GetScalarType<T[P], YeuthichGroupByOutputType[P]>
        }
      >
    >


  export type YeuthichSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baivietID?: boolean
    nguoidungID?: boolean
    ngaytao?: boolean
    thongbao?: boolean | Yeuthich$thongbaoArgs<ExtArgs>
    baiviet?: boolean | BaivietDefaultArgs<ExtArgs>
    nguoidung?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | YeuthichCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yeuthich"]>



  export type YeuthichSelectScalar = {
    id?: boolean
    baivietID?: boolean
    nguoidungID?: boolean
    ngaytao?: boolean
  }

  export type YeuthichOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baivietID" | "nguoidungID" | "ngaytao", ExtArgs["result"]["yeuthich"]>
  export type YeuthichInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thongbao?: boolean | Yeuthich$thongbaoArgs<ExtArgs>
    baiviet?: boolean | BaivietDefaultArgs<ExtArgs>
    nguoidung?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | YeuthichCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $YeuthichPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Yeuthich"
    objects: {
      thongbao: Prisma.$ThongbaoPayload<ExtArgs>[]
      baiviet: Prisma.$BaivietPayload<ExtArgs>
      nguoidung: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      baivietID: number
      nguoidungID: number
      ngaytao: Date
    }, ExtArgs["result"]["yeuthich"]>
    composites: {}
  }

  type YeuthichGetPayload<S extends boolean | null | undefined | YeuthichDefaultArgs> = $Result.GetResult<Prisma.$YeuthichPayload, S>

  type YeuthichCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YeuthichFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YeuthichCountAggregateInputType | true
    }

  export interface YeuthichDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Yeuthich'], meta: { name: 'Yeuthich' } }
    /**
     * Find zero or one Yeuthich that matches the filter.
     * @param {YeuthichFindUniqueArgs} args - Arguments to find a Yeuthich
     * @example
     * // Get one Yeuthich
     * const yeuthich = await prisma.yeuthich.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YeuthichFindUniqueArgs>(args: SelectSubset<T, YeuthichFindUniqueArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yeuthich that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YeuthichFindUniqueOrThrowArgs} args - Arguments to find a Yeuthich
     * @example
     * // Get one Yeuthich
     * const yeuthich = await prisma.yeuthich.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YeuthichFindUniqueOrThrowArgs>(args: SelectSubset<T, YeuthichFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yeuthich that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichFindFirstArgs} args - Arguments to find a Yeuthich
     * @example
     * // Get one Yeuthich
     * const yeuthich = await prisma.yeuthich.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YeuthichFindFirstArgs>(args?: SelectSubset<T, YeuthichFindFirstArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yeuthich that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichFindFirstOrThrowArgs} args - Arguments to find a Yeuthich
     * @example
     * // Get one Yeuthich
     * const yeuthich = await prisma.yeuthich.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YeuthichFindFirstOrThrowArgs>(args?: SelectSubset<T, YeuthichFindFirstOrThrowArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yeuthiches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yeuthiches
     * const yeuthiches = await prisma.yeuthich.findMany()
     * 
     * // Get first 10 Yeuthiches
     * const yeuthiches = await prisma.yeuthich.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yeuthichWithIdOnly = await prisma.yeuthich.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YeuthichFindManyArgs>(args?: SelectSubset<T, YeuthichFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yeuthich.
     * @param {YeuthichCreateArgs} args - Arguments to create a Yeuthich.
     * @example
     * // Create one Yeuthich
     * const Yeuthich = await prisma.yeuthich.create({
     *   data: {
     *     // ... data to create a Yeuthich
     *   }
     * })
     * 
     */
    create<T extends YeuthichCreateArgs>(args: SelectSubset<T, YeuthichCreateArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yeuthiches.
     * @param {YeuthichCreateManyArgs} args - Arguments to create many Yeuthiches.
     * @example
     * // Create many Yeuthiches
     * const yeuthich = await prisma.yeuthich.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YeuthichCreateManyArgs>(args?: SelectSubset<T, YeuthichCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Yeuthich.
     * @param {YeuthichDeleteArgs} args - Arguments to delete one Yeuthich.
     * @example
     * // Delete one Yeuthich
     * const Yeuthich = await prisma.yeuthich.delete({
     *   where: {
     *     // ... filter to delete one Yeuthich
     *   }
     * })
     * 
     */
    delete<T extends YeuthichDeleteArgs>(args: SelectSubset<T, YeuthichDeleteArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yeuthich.
     * @param {YeuthichUpdateArgs} args - Arguments to update one Yeuthich.
     * @example
     * // Update one Yeuthich
     * const yeuthich = await prisma.yeuthich.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YeuthichUpdateArgs>(args: SelectSubset<T, YeuthichUpdateArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yeuthiches.
     * @param {YeuthichDeleteManyArgs} args - Arguments to filter Yeuthiches to delete.
     * @example
     * // Delete a few Yeuthiches
     * const { count } = await prisma.yeuthich.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YeuthichDeleteManyArgs>(args?: SelectSubset<T, YeuthichDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yeuthiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yeuthiches
     * const yeuthich = await prisma.yeuthich.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YeuthichUpdateManyArgs>(args: SelectSubset<T, YeuthichUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Yeuthich.
     * @param {YeuthichUpsertArgs} args - Arguments to update or create a Yeuthich.
     * @example
     * // Update or create a Yeuthich
     * const yeuthich = await prisma.yeuthich.upsert({
     *   create: {
     *     // ... data to create a Yeuthich
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yeuthich we want to update
     *   }
     * })
     */
    upsert<T extends YeuthichUpsertArgs>(args: SelectSubset<T, YeuthichUpsertArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yeuthiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichCountArgs} args - Arguments to filter Yeuthiches to count.
     * @example
     * // Count the number of Yeuthiches
     * const count = await prisma.yeuthich.count({
     *   where: {
     *     // ... the filter for the Yeuthiches we want to count
     *   }
     * })
    **/
    count<T extends YeuthichCountArgs>(
      args?: Subset<T, YeuthichCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YeuthichCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yeuthich.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YeuthichAggregateArgs>(args: Subset<T, YeuthichAggregateArgs>): Prisma.PrismaPromise<GetYeuthichAggregateType<T>>

    /**
     * Group by Yeuthich.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YeuthichGroupByArgs} args - Group by arguments.
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
      T extends YeuthichGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YeuthichGroupByArgs['orderBy'] }
        : { orderBy?: YeuthichGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YeuthichGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYeuthichGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Yeuthich model
   */
  readonly fields: YeuthichFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Yeuthich.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YeuthichClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thongbao<T extends Yeuthich$thongbaoArgs<ExtArgs> = {}>(args?: Subset<T, Yeuthich$thongbaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    baiviet<T extends BaivietDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaivietDefaultArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoidung<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Yeuthich model
   */
  interface YeuthichFieldRefs {
    readonly id: FieldRef<"Yeuthich", 'Int'>
    readonly baivietID: FieldRef<"Yeuthich", 'Int'>
    readonly nguoidungID: FieldRef<"Yeuthich", 'Int'>
    readonly ngaytao: FieldRef<"Yeuthich", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Yeuthich findUnique
   */
  export type YeuthichFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter, which Yeuthich to fetch.
     */
    where: YeuthichWhereUniqueInput
  }

  /**
   * Yeuthich findUniqueOrThrow
   */
  export type YeuthichFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter, which Yeuthich to fetch.
     */
    where: YeuthichWhereUniqueInput
  }

  /**
   * Yeuthich findFirst
   */
  export type YeuthichFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter, which Yeuthich to fetch.
     */
    where?: YeuthichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yeuthiches to fetch.
     */
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yeuthiches.
     */
    cursor?: YeuthichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yeuthiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yeuthiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yeuthiches.
     */
    distinct?: YeuthichScalarFieldEnum | YeuthichScalarFieldEnum[]
  }

  /**
   * Yeuthich findFirstOrThrow
   */
  export type YeuthichFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter, which Yeuthich to fetch.
     */
    where?: YeuthichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yeuthiches to fetch.
     */
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Yeuthiches.
     */
    cursor?: YeuthichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yeuthiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yeuthiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Yeuthiches.
     */
    distinct?: YeuthichScalarFieldEnum | YeuthichScalarFieldEnum[]
  }

  /**
   * Yeuthich findMany
   */
  export type YeuthichFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter, which Yeuthiches to fetch.
     */
    where?: YeuthichWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Yeuthiches to fetch.
     */
    orderBy?: YeuthichOrderByWithRelationInput | YeuthichOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Yeuthiches.
     */
    cursor?: YeuthichWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Yeuthiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Yeuthiches.
     */
    skip?: number
    distinct?: YeuthichScalarFieldEnum | YeuthichScalarFieldEnum[]
  }

  /**
   * Yeuthich create
   */
  export type YeuthichCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * The data needed to create a Yeuthich.
     */
    data: XOR<YeuthichCreateInput, YeuthichUncheckedCreateInput>
  }

  /**
   * Yeuthich createMany
   */
  export type YeuthichCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Yeuthiches.
     */
    data: YeuthichCreateManyInput | YeuthichCreateManyInput[]
  }

  /**
   * Yeuthich update
   */
  export type YeuthichUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * The data needed to update a Yeuthich.
     */
    data: XOR<YeuthichUpdateInput, YeuthichUncheckedUpdateInput>
    /**
     * Choose, which Yeuthich to update.
     */
    where: YeuthichWhereUniqueInput
  }

  /**
   * Yeuthich updateMany
   */
  export type YeuthichUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Yeuthiches.
     */
    data: XOR<YeuthichUpdateManyMutationInput, YeuthichUncheckedUpdateManyInput>
    /**
     * Filter which Yeuthiches to update
     */
    where?: YeuthichWhereInput
    /**
     * Limit how many Yeuthiches to update.
     */
    limit?: number
  }

  /**
   * Yeuthich upsert
   */
  export type YeuthichUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * The filter to search for the Yeuthich to update in case it exists.
     */
    where: YeuthichWhereUniqueInput
    /**
     * In case the Yeuthich found by the `where` argument doesn't exist, create a new Yeuthich with this data.
     */
    create: XOR<YeuthichCreateInput, YeuthichUncheckedCreateInput>
    /**
     * In case the Yeuthich was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YeuthichUpdateInput, YeuthichUncheckedUpdateInput>
  }

  /**
   * Yeuthich delete
   */
  export type YeuthichDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    /**
     * Filter which Yeuthich to delete.
     */
    where: YeuthichWhereUniqueInput
  }

  /**
   * Yeuthich deleteMany
   */
  export type YeuthichDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Yeuthiches to delete
     */
    where?: YeuthichWhereInput
    /**
     * Limit how many Yeuthiches to delete.
     */
    limit?: number
  }

  /**
   * Yeuthich.thongbao
   */
  export type Yeuthich$thongbaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    cursor?: ThongbaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Yeuthich without action
   */
  export type YeuthichDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
  }


  /**
   * Model Thongbao
   */

  export type AggregateThongbao = {
    _count: ThongbaoCountAggregateOutputType | null
    _avg: ThongbaoAvgAggregateOutputType | null
    _sum: ThongbaoSumAggregateOutputType | null
    _min: ThongbaoMinAggregateOutputType | null
    _max: ThongbaoMaxAggregateOutputType | null
  }

  export type ThongbaoAvgAggregateOutputType = {
    id: number | null
    nguoidungID: number | null
    nguoitaoID: number | null
    baivietID: number | null
    binhluanID: number | null
    yeuthichID: number | null
  }

  export type ThongbaoSumAggregateOutputType = {
    id: number | null
    nguoidungID: number | null
    nguoitaoID: number | null
    baivietID: number | null
    binhluanID: number | null
    yeuthichID: number | null
  }

  export type ThongbaoMinAggregateOutputType = {
    id: number | null
    nguoidungID: number | null
    nguoitaoID: number | null
    noidung: string | null
    baivietID: number | null
    binhluanID: number | null
    yeuthichID: number | null
    loai: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
    daXem: boolean | null
  }

  export type ThongbaoMaxAggregateOutputType = {
    id: number | null
    nguoidungID: number | null
    nguoitaoID: number | null
    noidung: string | null
    baivietID: number | null
    binhluanID: number | null
    yeuthichID: number | null
    loai: string | null
    ngaytao: Date | null
    ngaycapnhat: Date | null
    daXem: boolean | null
  }

  export type ThongbaoCountAggregateOutputType = {
    id: number
    nguoidungID: number
    nguoitaoID: number
    noidung: number
    baivietID: number
    binhluanID: number
    yeuthichID: number
    loai: number
    ngaytao: number
    ngaycapnhat: number
    daXem: number
    _all: number
  }


  export type ThongbaoAvgAggregateInputType = {
    id?: true
    nguoidungID?: true
    nguoitaoID?: true
    baivietID?: true
    binhluanID?: true
    yeuthichID?: true
  }

  export type ThongbaoSumAggregateInputType = {
    id?: true
    nguoidungID?: true
    nguoitaoID?: true
    baivietID?: true
    binhluanID?: true
    yeuthichID?: true
  }

  export type ThongbaoMinAggregateInputType = {
    id?: true
    nguoidungID?: true
    nguoitaoID?: true
    noidung?: true
    baivietID?: true
    binhluanID?: true
    yeuthichID?: true
    loai?: true
    ngaytao?: true
    ngaycapnhat?: true
    daXem?: true
  }

  export type ThongbaoMaxAggregateInputType = {
    id?: true
    nguoidungID?: true
    nguoitaoID?: true
    noidung?: true
    baivietID?: true
    binhluanID?: true
    yeuthichID?: true
    loai?: true
    ngaytao?: true
    ngaycapnhat?: true
    daXem?: true
  }

  export type ThongbaoCountAggregateInputType = {
    id?: true
    nguoidungID?: true
    nguoitaoID?: true
    noidung?: true
    baivietID?: true
    binhluanID?: true
    yeuthichID?: true
    loai?: true
    ngaytao?: true
    ngaycapnhat?: true
    daXem?: true
    _all?: true
  }

  export type ThongbaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thongbao to aggregate.
     */
    where?: ThongbaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thongbaos to fetch.
     */
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThongbaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thongbaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thongbaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thongbaos
    **/
    _count?: true | ThongbaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThongbaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThongbaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThongbaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThongbaoMaxAggregateInputType
  }

  export type GetThongbaoAggregateType<T extends ThongbaoAggregateArgs> = {
        [P in keyof T & keyof AggregateThongbao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThongbao[P]>
      : GetScalarType<T[P], AggregateThongbao[P]>
  }




  export type ThongbaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThongbaoWhereInput
    orderBy?: ThongbaoOrderByWithAggregationInput | ThongbaoOrderByWithAggregationInput[]
    by: ThongbaoScalarFieldEnum[] | ThongbaoScalarFieldEnum
    having?: ThongbaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThongbaoCountAggregateInputType | true
    _avg?: ThongbaoAvgAggregateInputType
    _sum?: ThongbaoSumAggregateInputType
    _min?: ThongbaoMinAggregateInputType
    _max?: ThongbaoMaxAggregateInputType
  }

  export type ThongbaoGroupByOutputType = {
    id: number
    nguoidungID: number
    nguoitaoID: number
    noidung: string | null
    baivietID: number | null
    binhluanID: number | null
    yeuthichID: number | null
    loai: string | null
    ngaytao: Date
    ngaycapnhat: Date
    daXem: boolean
    _count: ThongbaoCountAggregateOutputType | null
    _avg: ThongbaoAvgAggregateOutputType | null
    _sum: ThongbaoSumAggregateOutputType | null
    _min: ThongbaoMinAggregateOutputType | null
    _max: ThongbaoMaxAggregateOutputType | null
  }

  type GetThongbaoGroupByPayload<T extends ThongbaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThongbaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThongbaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThongbaoGroupByOutputType[P]>
            : GetScalarType<T[P], ThongbaoGroupByOutputType[P]>
        }
      >
    >


  export type ThongbaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nguoidungID?: boolean
    nguoitaoID?: boolean
    noidung?: boolean
    baivietID?: boolean
    binhluanID?: boolean
    yeuthichID?: boolean
    loai?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    daXem?: boolean
    baiviet?: boolean | Thongbao$baivietArgs<ExtArgs>
    binhluan?: boolean | Thongbao$binhluanArgs<ExtArgs>
    nguoidung?: boolean | UserDefaultArgs<ExtArgs>
    nguoitao?: boolean | UserDefaultArgs<ExtArgs>
    yeuthich?: boolean | Thongbao$yeuthichArgs<ExtArgs>
  }, ExtArgs["result"]["thongbao"]>



  export type ThongbaoSelectScalar = {
    id?: boolean
    nguoidungID?: boolean
    nguoitaoID?: boolean
    noidung?: boolean
    baivietID?: boolean
    binhluanID?: boolean
    yeuthichID?: boolean
    loai?: boolean
    ngaytao?: boolean
    ngaycapnhat?: boolean
    daXem?: boolean
  }

  export type ThongbaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nguoidungID" | "nguoitaoID" | "noidung" | "baivietID" | "binhluanID" | "yeuthichID" | "loai" | "ngaytao" | "ngaycapnhat" | "daXem", ExtArgs["result"]["thongbao"]>
  export type ThongbaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | Thongbao$baivietArgs<ExtArgs>
    binhluan?: boolean | Thongbao$binhluanArgs<ExtArgs>
    nguoidung?: boolean | UserDefaultArgs<ExtArgs>
    nguoitao?: boolean | UserDefaultArgs<ExtArgs>
    yeuthich?: boolean | Thongbao$yeuthichArgs<ExtArgs>
  }

  export type $ThongbaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thongbao"
    objects: {
      baiviet: Prisma.$BaivietPayload<ExtArgs> | null
      binhluan: Prisma.$BinhluanPayload<ExtArgs> | null
      nguoidung: Prisma.$UserPayload<ExtArgs>
      nguoitao: Prisma.$UserPayload<ExtArgs>
      yeuthich: Prisma.$YeuthichPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nguoidungID: number
      nguoitaoID: number
      noidung: string | null
      baivietID: number | null
      binhluanID: number | null
      yeuthichID: number | null
      loai: string | null
      ngaytao: Date
      ngaycapnhat: Date
      daXem: boolean
    }, ExtArgs["result"]["thongbao"]>
    composites: {}
  }

  type ThongbaoGetPayload<S extends boolean | null | undefined | ThongbaoDefaultArgs> = $Result.GetResult<Prisma.$ThongbaoPayload, S>

  type ThongbaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThongbaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThongbaoCountAggregateInputType | true
    }

  export interface ThongbaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thongbao'], meta: { name: 'Thongbao' } }
    /**
     * Find zero or one Thongbao that matches the filter.
     * @param {ThongbaoFindUniqueArgs} args - Arguments to find a Thongbao
     * @example
     * // Get one Thongbao
     * const thongbao = await prisma.thongbao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThongbaoFindUniqueArgs>(args: SelectSubset<T, ThongbaoFindUniqueArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thongbao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThongbaoFindUniqueOrThrowArgs} args - Arguments to find a Thongbao
     * @example
     * // Get one Thongbao
     * const thongbao = await prisma.thongbao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThongbaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ThongbaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thongbao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoFindFirstArgs} args - Arguments to find a Thongbao
     * @example
     * // Get one Thongbao
     * const thongbao = await prisma.thongbao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThongbaoFindFirstArgs>(args?: SelectSubset<T, ThongbaoFindFirstArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thongbao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoFindFirstOrThrowArgs} args - Arguments to find a Thongbao
     * @example
     * // Get one Thongbao
     * const thongbao = await prisma.thongbao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThongbaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ThongbaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thongbaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thongbaos
     * const thongbaos = await prisma.thongbao.findMany()
     * 
     * // Get first 10 Thongbaos
     * const thongbaos = await prisma.thongbao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thongbaoWithIdOnly = await prisma.thongbao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThongbaoFindManyArgs>(args?: SelectSubset<T, ThongbaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thongbao.
     * @param {ThongbaoCreateArgs} args - Arguments to create a Thongbao.
     * @example
     * // Create one Thongbao
     * const Thongbao = await prisma.thongbao.create({
     *   data: {
     *     // ... data to create a Thongbao
     *   }
     * })
     * 
     */
    create<T extends ThongbaoCreateArgs>(args: SelectSubset<T, ThongbaoCreateArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thongbaos.
     * @param {ThongbaoCreateManyArgs} args - Arguments to create many Thongbaos.
     * @example
     * // Create many Thongbaos
     * const thongbao = await prisma.thongbao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThongbaoCreateManyArgs>(args?: SelectSubset<T, ThongbaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thongbao.
     * @param {ThongbaoDeleteArgs} args - Arguments to delete one Thongbao.
     * @example
     * // Delete one Thongbao
     * const Thongbao = await prisma.thongbao.delete({
     *   where: {
     *     // ... filter to delete one Thongbao
     *   }
     * })
     * 
     */
    delete<T extends ThongbaoDeleteArgs>(args: SelectSubset<T, ThongbaoDeleteArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thongbao.
     * @param {ThongbaoUpdateArgs} args - Arguments to update one Thongbao.
     * @example
     * // Update one Thongbao
     * const thongbao = await prisma.thongbao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThongbaoUpdateArgs>(args: SelectSubset<T, ThongbaoUpdateArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thongbaos.
     * @param {ThongbaoDeleteManyArgs} args - Arguments to filter Thongbaos to delete.
     * @example
     * // Delete a few Thongbaos
     * const { count } = await prisma.thongbao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThongbaoDeleteManyArgs>(args?: SelectSubset<T, ThongbaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thongbaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thongbaos
     * const thongbao = await prisma.thongbao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThongbaoUpdateManyArgs>(args: SelectSubset<T, ThongbaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thongbao.
     * @param {ThongbaoUpsertArgs} args - Arguments to update or create a Thongbao.
     * @example
     * // Update or create a Thongbao
     * const thongbao = await prisma.thongbao.upsert({
     *   create: {
     *     // ... data to create a Thongbao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thongbao we want to update
     *   }
     * })
     */
    upsert<T extends ThongbaoUpsertArgs>(args: SelectSubset<T, ThongbaoUpsertArgs<ExtArgs>>): Prisma__ThongbaoClient<$Result.GetResult<Prisma.$ThongbaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thongbaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoCountArgs} args - Arguments to filter Thongbaos to count.
     * @example
     * // Count the number of Thongbaos
     * const count = await prisma.thongbao.count({
     *   where: {
     *     // ... the filter for the Thongbaos we want to count
     *   }
     * })
    **/
    count<T extends ThongbaoCountArgs>(
      args?: Subset<T, ThongbaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThongbaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thongbao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThongbaoAggregateArgs>(args: Subset<T, ThongbaoAggregateArgs>): Prisma.PrismaPromise<GetThongbaoAggregateType<T>>

    /**
     * Group by Thongbao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThongbaoGroupByArgs} args - Group by arguments.
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
      T extends ThongbaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThongbaoGroupByArgs['orderBy'] }
        : { orderBy?: ThongbaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThongbaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThongbaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thongbao model
   */
  readonly fields: ThongbaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thongbao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThongbaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baiviet<T extends Thongbao$baivietArgs<ExtArgs> = {}>(args?: Subset<T, Thongbao$baivietArgs<ExtArgs>>): Prisma__BaivietClient<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    binhluan<T extends Thongbao$binhluanArgs<ExtArgs> = {}>(args?: Subset<T, Thongbao$binhluanArgs<ExtArgs>>): Prisma__BinhluanClient<$Result.GetResult<Prisma.$BinhluanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nguoidung<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoitao<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    yeuthich<T extends Thongbao$yeuthichArgs<ExtArgs> = {}>(args?: Subset<T, Thongbao$yeuthichArgs<ExtArgs>>): Prisma__YeuthichClient<$Result.GetResult<Prisma.$YeuthichPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Thongbao model
   */
  interface ThongbaoFieldRefs {
    readonly id: FieldRef<"Thongbao", 'Int'>
    readonly nguoidungID: FieldRef<"Thongbao", 'Int'>
    readonly nguoitaoID: FieldRef<"Thongbao", 'Int'>
    readonly noidung: FieldRef<"Thongbao", 'String'>
    readonly baivietID: FieldRef<"Thongbao", 'Int'>
    readonly binhluanID: FieldRef<"Thongbao", 'Int'>
    readonly yeuthichID: FieldRef<"Thongbao", 'Int'>
    readonly loai: FieldRef<"Thongbao", 'String'>
    readonly ngaytao: FieldRef<"Thongbao", 'DateTime'>
    readonly ngaycapnhat: FieldRef<"Thongbao", 'DateTime'>
    readonly daXem: FieldRef<"Thongbao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Thongbao findUnique
   */
  export type ThongbaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter, which Thongbao to fetch.
     */
    where: ThongbaoWhereUniqueInput
  }

  /**
   * Thongbao findUniqueOrThrow
   */
  export type ThongbaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter, which Thongbao to fetch.
     */
    where: ThongbaoWhereUniqueInput
  }

  /**
   * Thongbao findFirst
   */
  export type ThongbaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter, which Thongbao to fetch.
     */
    where?: ThongbaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thongbaos to fetch.
     */
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thongbaos.
     */
    cursor?: ThongbaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thongbaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thongbaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thongbaos.
     */
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Thongbao findFirstOrThrow
   */
  export type ThongbaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter, which Thongbao to fetch.
     */
    where?: ThongbaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thongbaos to fetch.
     */
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thongbaos.
     */
    cursor?: ThongbaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thongbaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thongbaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thongbaos.
     */
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Thongbao findMany
   */
  export type ThongbaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter, which Thongbaos to fetch.
     */
    where?: ThongbaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thongbaos to fetch.
     */
    orderBy?: ThongbaoOrderByWithRelationInput | ThongbaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thongbaos.
     */
    cursor?: ThongbaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thongbaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thongbaos.
     */
    skip?: number
    distinct?: ThongbaoScalarFieldEnum | ThongbaoScalarFieldEnum[]
  }

  /**
   * Thongbao create
   */
  export type ThongbaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Thongbao.
     */
    data: XOR<ThongbaoCreateInput, ThongbaoUncheckedCreateInput>
  }

  /**
   * Thongbao createMany
   */
  export type ThongbaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thongbaos.
     */
    data: ThongbaoCreateManyInput | ThongbaoCreateManyInput[]
  }

  /**
   * Thongbao update
   */
  export type ThongbaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Thongbao.
     */
    data: XOR<ThongbaoUpdateInput, ThongbaoUncheckedUpdateInput>
    /**
     * Choose, which Thongbao to update.
     */
    where: ThongbaoWhereUniqueInput
  }

  /**
   * Thongbao updateMany
   */
  export type ThongbaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thongbaos.
     */
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyInput>
    /**
     * Filter which Thongbaos to update
     */
    where?: ThongbaoWhereInput
    /**
     * Limit how many Thongbaos to update.
     */
    limit?: number
  }

  /**
   * Thongbao upsert
   */
  export type ThongbaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Thongbao to update in case it exists.
     */
    where: ThongbaoWhereUniqueInput
    /**
     * In case the Thongbao found by the `where` argument doesn't exist, create a new Thongbao with this data.
     */
    create: XOR<ThongbaoCreateInput, ThongbaoUncheckedCreateInput>
    /**
     * In case the Thongbao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThongbaoUpdateInput, ThongbaoUncheckedUpdateInput>
  }

  /**
   * Thongbao delete
   */
  export type ThongbaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
    /**
     * Filter which Thongbao to delete.
     */
    where: ThongbaoWhereUniqueInput
  }

  /**
   * Thongbao deleteMany
   */
  export type ThongbaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thongbaos to delete
     */
    where?: ThongbaoWhereInput
    /**
     * Limit how many Thongbaos to delete.
     */
    limit?: number
  }

  /**
   * Thongbao.baiviet
   */
  export type Thongbao$baivietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    where?: BaivietWhereInput
  }

  /**
   * Thongbao.binhluan
   */
  export type Thongbao$binhluanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Binhluan
     */
    select?: BinhluanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Binhluan
     */
    omit?: BinhluanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinhluanInclude<ExtArgs> | null
    where?: BinhluanWhereInput
  }

  /**
   * Thongbao.yeuthich
   */
  export type Thongbao$yeuthichArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Yeuthich
     */
    select?: YeuthichSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Yeuthich
     */
    omit?: YeuthichOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YeuthichInclude<ExtArgs> | null
    where?: YeuthichWhereInput
  }

  /**
   * Thongbao without action
   */
  export type ThongbaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thongbao
     */
    select?: ThongbaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thongbao
     */
    omit?: ThongbaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThongbaoInclude<ExtArgs> | null
  }


  /**
   * Model Chude
   */

  export type AggregateChude = {
    _count: ChudeCountAggregateOutputType | null
    _avg: ChudeAvgAggregateOutputType | null
    _sum: ChudeSumAggregateOutputType | null
    _min: ChudeMinAggregateOutputType | null
    _max: ChudeMaxAggregateOutputType | null
  }

  export type ChudeAvgAggregateOutputType = {
    id: number | null
  }

  export type ChudeSumAggregateOutputType = {
    id: number | null
  }

  export type ChudeMinAggregateOutputType = {
    id: number | null
    ten: string | null
  }

  export type ChudeMaxAggregateOutputType = {
    id: number | null
    ten: string | null
  }

  export type ChudeCountAggregateOutputType = {
    id: number
    ten: number
    _all: number
  }


  export type ChudeAvgAggregateInputType = {
    id?: true
  }

  export type ChudeSumAggregateInputType = {
    id?: true
  }

  export type ChudeMinAggregateInputType = {
    id?: true
    ten?: true
  }

  export type ChudeMaxAggregateInputType = {
    id?: true
    ten?: true
  }

  export type ChudeCountAggregateInputType = {
    id?: true
    ten?: true
    _all?: true
  }

  export type ChudeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chude to aggregate.
     */
    where?: ChudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chudes to fetch.
     */
    orderBy?: ChudeOrderByWithRelationInput | ChudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chudes
    **/
    _count?: true | ChudeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChudeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChudeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChudeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChudeMaxAggregateInputType
  }

  export type GetChudeAggregateType<T extends ChudeAggregateArgs> = {
        [P in keyof T & keyof AggregateChude]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChude[P]>
      : GetScalarType<T[P], AggregateChude[P]>
  }




  export type ChudeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChudeWhereInput
    orderBy?: ChudeOrderByWithAggregationInput | ChudeOrderByWithAggregationInput[]
    by: ChudeScalarFieldEnum[] | ChudeScalarFieldEnum
    having?: ChudeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChudeCountAggregateInputType | true
    _avg?: ChudeAvgAggregateInputType
    _sum?: ChudeSumAggregateInputType
    _min?: ChudeMinAggregateInputType
    _max?: ChudeMaxAggregateInputType
  }

  export type ChudeGroupByOutputType = {
    id: number
    ten: string
    _count: ChudeCountAggregateOutputType | null
    _avg: ChudeAvgAggregateOutputType | null
    _sum: ChudeSumAggregateOutputType | null
    _min: ChudeMinAggregateOutputType | null
    _max: ChudeMaxAggregateOutputType | null
  }

  type GetChudeGroupByPayload<T extends ChudeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChudeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChudeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChudeGroupByOutputType[P]>
            : GetScalarType<T[P], ChudeGroupByOutputType[P]>
        }
      >
    >


  export type ChudeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ten?: boolean
    baiviet?: boolean | Chude$baivietArgs<ExtArgs>
    _count?: boolean | ChudeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chude"]>



  export type ChudeSelectScalar = {
    id?: boolean
    ten?: boolean
  }

  export type ChudeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ten", ExtArgs["result"]["chude"]>
  export type ChudeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baiviet?: boolean | Chude$baivietArgs<ExtArgs>
    _count?: boolean | ChudeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChudePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chude"
    objects: {
      baiviet: Prisma.$BaivietPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ten: string
    }, ExtArgs["result"]["chude"]>
    composites: {}
  }

  type ChudeGetPayload<S extends boolean | null | undefined | ChudeDefaultArgs> = $Result.GetResult<Prisma.$ChudePayload, S>

  type ChudeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChudeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChudeCountAggregateInputType | true
    }

  export interface ChudeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chude'], meta: { name: 'Chude' } }
    /**
     * Find zero or one Chude that matches the filter.
     * @param {ChudeFindUniqueArgs} args - Arguments to find a Chude
     * @example
     * // Get one Chude
     * const chude = await prisma.chude.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChudeFindUniqueArgs>(args: SelectSubset<T, ChudeFindUniqueArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chude that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChudeFindUniqueOrThrowArgs} args - Arguments to find a Chude
     * @example
     * // Get one Chude
     * const chude = await prisma.chude.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChudeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChudeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chude that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeFindFirstArgs} args - Arguments to find a Chude
     * @example
     * // Get one Chude
     * const chude = await prisma.chude.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChudeFindFirstArgs>(args?: SelectSubset<T, ChudeFindFirstArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chude that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeFindFirstOrThrowArgs} args - Arguments to find a Chude
     * @example
     * // Get one Chude
     * const chude = await prisma.chude.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChudeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChudeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chudes
     * const chudes = await prisma.chude.findMany()
     * 
     * // Get first 10 Chudes
     * const chudes = await prisma.chude.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chudeWithIdOnly = await prisma.chude.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChudeFindManyArgs>(args?: SelectSubset<T, ChudeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chude.
     * @param {ChudeCreateArgs} args - Arguments to create a Chude.
     * @example
     * // Create one Chude
     * const Chude = await prisma.chude.create({
     *   data: {
     *     // ... data to create a Chude
     *   }
     * })
     * 
     */
    create<T extends ChudeCreateArgs>(args: SelectSubset<T, ChudeCreateArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chudes.
     * @param {ChudeCreateManyArgs} args - Arguments to create many Chudes.
     * @example
     * // Create many Chudes
     * const chude = await prisma.chude.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChudeCreateManyArgs>(args?: SelectSubset<T, ChudeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chude.
     * @param {ChudeDeleteArgs} args - Arguments to delete one Chude.
     * @example
     * // Delete one Chude
     * const Chude = await prisma.chude.delete({
     *   where: {
     *     // ... filter to delete one Chude
     *   }
     * })
     * 
     */
    delete<T extends ChudeDeleteArgs>(args: SelectSubset<T, ChudeDeleteArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chude.
     * @param {ChudeUpdateArgs} args - Arguments to update one Chude.
     * @example
     * // Update one Chude
     * const chude = await prisma.chude.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChudeUpdateArgs>(args: SelectSubset<T, ChudeUpdateArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chudes.
     * @param {ChudeDeleteManyArgs} args - Arguments to filter Chudes to delete.
     * @example
     * // Delete a few Chudes
     * const { count } = await prisma.chude.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChudeDeleteManyArgs>(args?: SelectSubset<T, ChudeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chudes
     * const chude = await prisma.chude.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChudeUpdateManyArgs>(args: SelectSubset<T, ChudeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chude.
     * @param {ChudeUpsertArgs} args - Arguments to update or create a Chude.
     * @example
     * // Update or create a Chude
     * const chude = await prisma.chude.upsert({
     *   create: {
     *     // ... data to create a Chude
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chude we want to update
     *   }
     * })
     */
    upsert<T extends ChudeUpsertArgs>(args: SelectSubset<T, ChudeUpsertArgs<ExtArgs>>): Prisma__ChudeClient<$Result.GetResult<Prisma.$ChudePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeCountArgs} args - Arguments to filter Chudes to count.
     * @example
     * // Count the number of Chudes
     * const count = await prisma.chude.count({
     *   where: {
     *     // ... the filter for the Chudes we want to count
     *   }
     * })
    **/
    count<T extends ChudeCountArgs>(
      args?: Subset<T, ChudeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChudeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChudeAggregateArgs>(args: Subset<T, ChudeAggregateArgs>): Prisma.PrismaPromise<GetChudeAggregateType<T>>

    /**
     * Group by Chude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChudeGroupByArgs} args - Group by arguments.
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
      T extends ChudeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChudeGroupByArgs['orderBy'] }
        : { orderBy?: ChudeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChudeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChudeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chude model
   */
  readonly fields: ChudeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chude.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChudeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baiviet<T extends Chude$baivietArgs<ExtArgs> = {}>(args?: Subset<T, Chude$baivietArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaivietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chude model
   */
  interface ChudeFieldRefs {
    readonly id: FieldRef<"Chude", 'Int'>
    readonly ten: FieldRef<"Chude", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chude findUnique
   */
  export type ChudeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter, which Chude to fetch.
     */
    where: ChudeWhereUniqueInput
  }

  /**
   * Chude findUniqueOrThrow
   */
  export type ChudeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter, which Chude to fetch.
     */
    where: ChudeWhereUniqueInput
  }

  /**
   * Chude findFirst
   */
  export type ChudeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter, which Chude to fetch.
     */
    where?: ChudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chudes to fetch.
     */
    orderBy?: ChudeOrderByWithRelationInput | ChudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chudes.
     */
    cursor?: ChudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chudes.
     */
    distinct?: ChudeScalarFieldEnum | ChudeScalarFieldEnum[]
  }

  /**
   * Chude findFirstOrThrow
   */
  export type ChudeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter, which Chude to fetch.
     */
    where?: ChudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chudes to fetch.
     */
    orderBy?: ChudeOrderByWithRelationInput | ChudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chudes.
     */
    cursor?: ChudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chudes.
     */
    distinct?: ChudeScalarFieldEnum | ChudeScalarFieldEnum[]
  }

  /**
   * Chude findMany
   */
  export type ChudeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter, which Chudes to fetch.
     */
    where?: ChudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chudes to fetch.
     */
    orderBy?: ChudeOrderByWithRelationInput | ChudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chudes.
     */
    cursor?: ChudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chudes.
     */
    skip?: number
    distinct?: ChudeScalarFieldEnum | ChudeScalarFieldEnum[]
  }

  /**
   * Chude create
   */
  export type ChudeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * The data needed to create a Chude.
     */
    data: XOR<ChudeCreateInput, ChudeUncheckedCreateInput>
  }

  /**
   * Chude createMany
   */
  export type ChudeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chudes.
     */
    data: ChudeCreateManyInput | ChudeCreateManyInput[]
  }

  /**
   * Chude update
   */
  export type ChudeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * The data needed to update a Chude.
     */
    data: XOR<ChudeUpdateInput, ChudeUncheckedUpdateInput>
    /**
     * Choose, which Chude to update.
     */
    where: ChudeWhereUniqueInput
  }

  /**
   * Chude updateMany
   */
  export type ChudeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chudes.
     */
    data: XOR<ChudeUpdateManyMutationInput, ChudeUncheckedUpdateManyInput>
    /**
     * Filter which Chudes to update
     */
    where?: ChudeWhereInput
    /**
     * Limit how many Chudes to update.
     */
    limit?: number
  }

  /**
   * Chude upsert
   */
  export type ChudeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * The filter to search for the Chude to update in case it exists.
     */
    where: ChudeWhereUniqueInput
    /**
     * In case the Chude found by the `where` argument doesn't exist, create a new Chude with this data.
     */
    create: XOR<ChudeCreateInput, ChudeUncheckedCreateInput>
    /**
     * In case the Chude was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChudeUpdateInput, ChudeUncheckedUpdateInput>
  }

  /**
   * Chude delete
   */
  export type ChudeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
    /**
     * Filter which Chude to delete.
     */
    where: ChudeWhereUniqueInput
  }

  /**
   * Chude deleteMany
   */
  export type ChudeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chudes to delete
     */
    where?: ChudeWhereInput
    /**
     * Limit how many Chudes to delete.
     */
    limit?: number
  }

  /**
   * Chude.baiviet
   */
  export type Chude$baivietArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baiviet
     */
    select?: BaivietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baiviet
     */
    omit?: BaivietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaivietInclude<ExtArgs> | null
    where?: BaivietWhereInput
    orderBy?: BaivietOrderByWithRelationInput | BaivietOrderByWithRelationInput[]
    cursor?: BaivietWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaivietScalarFieldEnum | BaivietScalarFieldEnum[]
  }

  /**
   * Chude without action
   */
  export type ChudeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chude
     */
    select?: ChudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chude
     */
    omit?: ChudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChudeInclude<ExtArgs> | null
  }


  /**
   * Model CuocTroChuyen
   */

  export type AggregateCuocTroChuyen = {
    _count: CuocTroChuyenCountAggregateOutputType | null
    _avg: CuocTroChuyenAvgAggregateOutputType | null
    _sum: CuocTroChuyenSumAggregateOutputType | null
    _min: CuocTroChuyenMinAggregateOutputType | null
    _max: CuocTroChuyenMaxAggregateOutputType | null
  }

  export type CuocTroChuyenAvgAggregateOutputType = {
    id: number | null
  }

  export type CuocTroChuyenSumAggregateOutputType = {
    id: number | null
  }

  export type CuocTroChuyenMinAggregateOutputType = {
    id: number | null
    taoLuc: Date | null
    capNhatLuc: Date | null
  }

  export type CuocTroChuyenMaxAggregateOutputType = {
    id: number | null
    taoLuc: Date | null
    capNhatLuc: Date | null
  }

  export type CuocTroChuyenCountAggregateOutputType = {
    id: number
    taoLuc: number
    capNhatLuc: number
    _all: number
  }


  export type CuocTroChuyenAvgAggregateInputType = {
    id?: true
  }

  export type CuocTroChuyenSumAggregateInputType = {
    id?: true
  }

  export type CuocTroChuyenMinAggregateInputType = {
    id?: true
    taoLuc?: true
    capNhatLuc?: true
  }

  export type CuocTroChuyenMaxAggregateInputType = {
    id?: true
    taoLuc?: true
    capNhatLuc?: true
  }

  export type CuocTroChuyenCountAggregateInputType = {
    id?: true
    taoLuc?: true
    capNhatLuc?: true
    _all?: true
  }

  export type CuocTroChuyenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuocTroChuyen to aggregate.
     */
    where?: CuocTroChuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyens to fetch.
     */
    orderBy?: CuocTroChuyenOrderByWithRelationInput | CuocTroChuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuocTroChuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CuocTroChuyens
    **/
    _count?: true | CuocTroChuyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuocTroChuyenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuocTroChuyenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuocTroChuyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuocTroChuyenMaxAggregateInputType
  }

  export type GetCuocTroChuyenAggregateType<T extends CuocTroChuyenAggregateArgs> = {
        [P in keyof T & keyof AggregateCuocTroChuyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuocTroChuyen[P]>
      : GetScalarType<T[P], AggregateCuocTroChuyen[P]>
  }




  export type CuocTroChuyenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuocTroChuyenWhereInput
    orderBy?: CuocTroChuyenOrderByWithAggregationInput | CuocTroChuyenOrderByWithAggregationInput[]
    by: CuocTroChuyenScalarFieldEnum[] | CuocTroChuyenScalarFieldEnum
    having?: CuocTroChuyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuocTroChuyenCountAggregateInputType | true
    _avg?: CuocTroChuyenAvgAggregateInputType
    _sum?: CuocTroChuyenSumAggregateInputType
    _min?: CuocTroChuyenMinAggregateInputType
    _max?: CuocTroChuyenMaxAggregateInputType
  }

  export type CuocTroChuyenGroupByOutputType = {
    id: number
    taoLuc: Date
    capNhatLuc: Date
    _count: CuocTroChuyenCountAggregateOutputType | null
    _avg: CuocTroChuyenAvgAggregateOutputType | null
    _sum: CuocTroChuyenSumAggregateOutputType | null
    _min: CuocTroChuyenMinAggregateOutputType | null
    _max: CuocTroChuyenMaxAggregateOutputType | null
  }

  type GetCuocTroChuyenGroupByPayload<T extends CuocTroChuyenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuocTroChuyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuocTroChuyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuocTroChuyenGroupByOutputType[P]>
            : GetScalarType<T[P], CuocTroChuyenGroupByOutputType[P]>
        }
      >
    >


  export type CuocTroChuyenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taoLuc?: boolean
    capNhatLuc?: boolean
    thanhVien?: boolean | CuocTroChuyen$thanhVienArgs<ExtArgs>
    tinNhan?: boolean | CuocTroChuyen$tinNhanArgs<ExtArgs>
    _count?: boolean | CuocTroChuyenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuocTroChuyen"]>



  export type CuocTroChuyenSelectScalar = {
    id?: boolean
    taoLuc?: boolean
    capNhatLuc?: boolean
  }

  export type CuocTroChuyenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taoLuc" | "capNhatLuc", ExtArgs["result"]["cuocTroChuyen"]>
  export type CuocTroChuyenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thanhVien?: boolean | CuocTroChuyen$thanhVienArgs<ExtArgs>
    tinNhan?: boolean | CuocTroChuyen$tinNhanArgs<ExtArgs>
    _count?: boolean | CuocTroChuyenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CuocTroChuyenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CuocTroChuyen"
    objects: {
      thanhVien: Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>[]
      tinNhan: Prisma.$TinNhanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taoLuc: Date
      capNhatLuc: Date
    }, ExtArgs["result"]["cuocTroChuyen"]>
    composites: {}
  }

  type CuocTroChuyenGetPayload<S extends boolean | null | undefined | CuocTroChuyenDefaultArgs> = $Result.GetResult<Prisma.$CuocTroChuyenPayload, S>

  type CuocTroChuyenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuocTroChuyenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuocTroChuyenCountAggregateInputType | true
    }

  export interface CuocTroChuyenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CuocTroChuyen'], meta: { name: 'CuocTroChuyen' } }
    /**
     * Find zero or one CuocTroChuyen that matches the filter.
     * @param {CuocTroChuyenFindUniqueArgs} args - Arguments to find a CuocTroChuyen
     * @example
     * // Get one CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuocTroChuyenFindUniqueArgs>(args: SelectSubset<T, CuocTroChuyenFindUniqueArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CuocTroChuyen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuocTroChuyenFindUniqueOrThrowArgs} args - Arguments to find a CuocTroChuyen
     * @example
     * // Get one CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuocTroChuyenFindUniqueOrThrowArgs>(args: SelectSubset<T, CuocTroChuyenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuocTroChuyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenFindFirstArgs} args - Arguments to find a CuocTroChuyen
     * @example
     * // Get one CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuocTroChuyenFindFirstArgs>(args?: SelectSubset<T, CuocTroChuyenFindFirstArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuocTroChuyen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenFindFirstOrThrowArgs} args - Arguments to find a CuocTroChuyen
     * @example
     * // Get one CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuocTroChuyenFindFirstOrThrowArgs>(args?: SelectSubset<T, CuocTroChuyenFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CuocTroChuyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CuocTroChuyens
     * const cuocTroChuyens = await prisma.cuocTroChuyen.findMany()
     * 
     * // Get first 10 CuocTroChuyens
     * const cuocTroChuyens = await prisma.cuocTroChuyen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuocTroChuyenWithIdOnly = await prisma.cuocTroChuyen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuocTroChuyenFindManyArgs>(args?: SelectSubset<T, CuocTroChuyenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CuocTroChuyen.
     * @param {CuocTroChuyenCreateArgs} args - Arguments to create a CuocTroChuyen.
     * @example
     * // Create one CuocTroChuyen
     * const CuocTroChuyen = await prisma.cuocTroChuyen.create({
     *   data: {
     *     // ... data to create a CuocTroChuyen
     *   }
     * })
     * 
     */
    create<T extends CuocTroChuyenCreateArgs>(args: SelectSubset<T, CuocTroChuyenCreateArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CuocTroChuyens.
     * @param {CuocTroChuyenCreateManyArgs} args - Arguments to create many CuocTroChuyens.
     * @example
     * // Create many CuocTroChuyens
     * const cuocTroChuyen = await prisma.cuocTroChuyen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuocTroChuyenCreateManyArgs>(args?: SelectSubset<T, CuocTroChuyenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CuocTroChuyen.
     * @param {CuocTroChuyenDeleteArgs} args - Arguments to delete one CuocTroChuyen.
     * @example
     * // Delete one CuocTroChuyen
     * const CuocTroChuyen = await prisma.cuocTroChuyen.delete({
     *   where: {
     *     // ... filter to delete one CuocTroChuyen
     *   }
     * })
     * 
     */
    delete<T extends CuocTroChuyenDeleteArgs>(args: SelectSubset<T, CuocTroChuyenDeleteArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CuocTroChuyen.
     * @param {CuocTroChuyenUpdateArgs} args - Arguments to update one CuocTroChuyen.
     * @example
     * // Update one CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuocTroChuyenUpdateArgs>(args: SelectSubset<T, CuocTroChuyenUpdateArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CuocTroChuyens.
     * @param {CuocTroChuyenDeleteManyArgs} args - Arguments to filter CuocTroChuyens to delete.
     * @example
     * // Delete a few CuocTroChuyens
     * const { count } = await prisma.cuocTroChuyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuocTroChuyenDeleteManyArgs>(args?: SelectSubset<T, CuocTroChuyenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CuocTroChuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CuocTroChuyens
     * const cuocTroChuyen = await prisma.cuocTroChuyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuocTroChuyenUpdateManyArgs>(args: SelectSubset<T, CuocTroChuyenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CuocTroChuyen.
     * @param {CuocTroChuyenUpsertArgs} args - Arguments to update or create a CuocTroChuyen.
     * @example
     * // Update or create a CuocTroChuyen
     * const cuocTroChuyen = await prisma.cuocTroChuyen.upsert({
     *   create: {
     *     // ... data to create a CuocTroChuyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CuocTroChuyen we want to update
     *   }
     * })
     */
    upsert<T extends CuocTroChuyenUpsertArgs>(args: SelectSubset<T, CuocTroChuyenUpsertArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CuocTroChuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenCountArgs} args - Arguments to filter CuocTroChuyens to count.
     * @example
     * // Count the number of CuocTroChuyens
     * const count = await prisma.cuocTroChuyen.count({
     *   where: {
     *     // ... the filter for the CuocTroChuyens we want to count
     *   }
     * })
    **/
    count<T extends CuocTroChuyenCountArgs>(
      args?: Subset<T, CuocTroChuyenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuocTroChuyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CuocTroChuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuocTroChuyenAggregateArgs>(args: Subset<T, CuocTroChuyenAggregateArgs>): Prisma.PrismaPromise<GetCuocTroChuyenAggregateType<T>>

    /**
     * Group by CuocTroChuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenGroupByArgs} args - Group by arguments.
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
      T extends CuocTroChuyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuocTroChuyenGroupByArgs['orderBy'] }
        : { orderBy?: CuocTroChuyenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuocTroChuyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuocTroChuyenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CuocTroChuyen model
   */
  readonly fields: CuocTroChuyenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CuocTroChuyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuocTroChuyenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thanhVien<T extends CuocTroChuyen$thanhVienArgs<ExtArgs> = {}>(args?: Subset<T, CuocTroChuyen$thanhVienArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tinNhan<T extends CuocTroChuyen$tinNhanArgs<ExtArgs> = {}>(args?: Subset<T, CuocTroChuyen$tinNhanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CuocTroChuyen model
   */
  interface CuocTroChuyenFieldRefs {
    readonly id: FieldRef<"CuocTroChuyen", 'Int'>
    readonly taoLuc: FieldRef<"CuocTroChuyen", 'DateTime'>
    readonly capNhatLuc: FieldRef<"CuocTroChuyen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CuocTroChuyen findUnique
   */
  export type CuocTroChuyenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyen to fetch.
     */
    where: CuocTroChuyenWhereUniqueInput
  }

  /**
   * CuocTroChuyen findUniqueOrThrow
   */
  export type CuocTroChuyenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyen to fetch.
     */
    where: CuocTroChuyenWhereUniqueInput
  }

  /**
   * CuocTroChuyen findFirst
   */
  export type CuocTroChuyenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyen to fetch.
     */
    where?: CuocTroChuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyens to fetch.
     */
    orderBy?: CuocTroChuyenOrderByWithRelationInput | CuocTroChuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuocTroChuyens.
     */
    cursor?: CuocTroChuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuocTroChuyens.
     */
    distinct?: CuocTroChuyenScalarFieldEnum | CuocTroChuyenScalarFieldEnum[]
  }

  /**
   * CuocTroChuyen findFirstOrThrow
   */
  export type CuocTroChuyenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyen to fetch.
     */
    where?: CuocTroChuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyens to fetch.
     */
    orderBy?: CuocTroChuyenOrderByWithRelationInput | CuocTroChuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuocTroChuyens.
     */
    cursor?: CuocTroChuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuocTroChuyens.
     */
    distinct?: CuocTroChuyenScalarFieldEnum | CuocTroChuyenScalarFieldEnum[]
  }

  /**
   * CuocTroChuyen findMany
   */
  export type CuocTroChuyenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyens to fetch.
     */
    where?: CuocTroChuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyens to fetch.
     */
    orderBy?: CuocTroChuyenOrderByWithRelationInput | CuocTroChuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CuocTroChuyens.
     */
    cursor?: CuocTroChuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyens.
     */
    skip?: number
    distinct?: CuocTroChuyenScalarFieldEnum | CuocTroChuyenScalarFieldEnum[]
  }

  /**
   * CuocTroChuyen create
   */
  export type CuocTroChuyenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * The data needed to create a CuocTroChuyen.
     */
    data: XOR<CuocTroChuyenCreateInput, CuocTroChuyenUncheckedCreateInput>
  }

  /**
   * CuocTroChuyen createMany
   */
  export type CuocTroChuyenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CuocTroChuyens.
     */
    data: CuocTroChuyenCreateManyInput | CuocTroChuyenCreateManyInput[]
  }

  /**
   * CuocTroChuyen update
   */
  export type CuocTroChuyenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * The data needed to update a CuocTroChuyen.
     */
    data: XOR<CuocTroChuyenUpdateInput, CuocTroChuyenUncheckedUpdateInput>
    /**
     * Choose, which CuocTroChuyen to update.
     */
    where: CuocTroChuyenWhereUniqueInput
  }

  /**
   * CuocTroChuyen updateMany
   */
  export type CuocTroChuyenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CuocTroChuyens.
     */
    data: XOR<CuocTroChuyenUpdateManyMutationInput, CuocTroChuyenUncheckedUpdateManyInput>
    /**
     * Filter which CuocTroChuyens to update
     */
    where?: CuocTroChuyenWhereInput
    /**
     * Limit how many CuocTroChuyens to update.
     */
    limit?: number
  }

  /**
   * CuocTroChuyen upsert
   */
  export type CuocTroChuyenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * The filter to search for the CuocTroChuyen to update in case it exists.
     */
    where: CuocTroChuyenWhereUniqueInput
    /**
     * In case the CuocTroChuyen found by the `where` argument doesn't exist, create a new CuocTroChuyen with this data.
     */
    create: XOR<CuocTroChuyenCreateInput, CuocTroChuyenUncheckedCreateInput>
    /**
     * In case the CuocTroChuyen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuocTroChuyenUpdateInput, CuocTroChuyenUncheckedUpdateInput>
  }

  /**
   * CuocTroChuyen delete
   */
  export type CuocTroChuyenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
    /**
     * Filter which CuocTroChuyen to delete.
     */
    where: CuocTroChuyenWhereUniqueInput
  }

  /**
   * CuocTroChuyen deleteMany
   */
  export type CuocTroChuyenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuocTroChuyens to delete
     */
    where?: CuocTroChuyenWhereInput
    /**
     * Limit how many CuocTroChuyens to delete.
     */
    limit?: number
  }

  /**
   * CuocTroChuyen.thanhVien
   */
  export type CuocTroChuyen$thanhVienArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    where?: CuocTroChuyenThanhVienWhereInput
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuocTroChuyenThanhVienScalarFieldEnum | CuocTroChuyenThanhVienScalarFieldEnum[]
  }

  /**
   * CuocTroChuyen.tinNhan
   */
  export type CuocTroChuyen$tinNhanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    where?: TinNhanWhereInput
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    cursor?: TinNhanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TinNhanScalarFieldEnum | TinNhanScalarFieldEnum[]
  }

  /**
   * CuocTroChuyen without action
   */
  export type CuocTroChuyenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyen
     */
    select?: CuocTroChuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyen
     */
    omit?: CuocTroChuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenInclude<ExtArgs> | null
  }


  /**
   * Model CuocTroChuyenThanhVien
   */

  export type AggregateCuocTroChuyenThanhVien = {
    _count: CuocTroChuyenThanhVienCountAggregateOutputType | null
    _avg: CuocTroChuyenThanhVienAvgAggregateOutputType | null
    _sum: CuocTroChuyenThanhVienSumAggregateOutputType | null
    _min: CuocTroChuyenThanhVienMinAggregateOutputType | null
    _max: CuocTroChuyenThanhVienMaxAggregateOutputType | null
  }

  export type CuocTroChuyenThanhVienAvgAggregateOutputType = {
    id: number | null
    nguoiDungId: number | null
    cuocTroChuyenId: number | null
  }

  export type CuocTroChuyenThanhVienSumAggregateOutputType = {
    id: number | null
    nguoiDungId: number | null
    cuocTroChuyenId: number | null
  }

  export type CuocTroChuyenThanhVienMinAggregateOutputType = {
    id: number | null
    nguoiDungId: number | null
    cuocTroChuyenId: number | null
    thamGiaLuc: Date | null
  }

  export type CuocTroChuyenThanhVienMaxAggregateOutputType = {
    id: number | null
    nguoiDungId: number | null
    cuocTroChuyenId: number | null
    thamGiaLuc: Date | null
  }

  export type CuocTroChuyenThanhVienCountAggregateOutputType = {
    id: number
    nguoiDungId: number
    cuocTroChuyenId: number
    thamGiaLuc: number
    _all: number
  }


  export type CuocTroChuyenThanhVienAvgAggregateInputType = {
    id?: true
    nguoiDungId?: true
    cuocTroChuyenId?: true
  }

  export type CuocTroChuyenThanhVienSumAggregateInputType = {
    id?: true
    nguoiDungId?: true
    cuocTroChuyenId?: true
  }

  export type CuocTroChuyenThanhVienMinAggregateInputType = {
    id?: true
    nguoiDungId?: true
    cuocTroChuyenId?: true
    thamGiaLuc?: true
  }

  export type CuocTroChuyenThanhVienMaxAggregateInputType = {
    id?: true
    nguoiDungId?: true
    cuocTroChuyenId?: true
    thamGiaLuc?: true
  }

  export type CuocTroChuyenThanhVienCountAggregateInputType = {
    id?: true
    nguoiDungId?: true
    cuocTroChuyenId?: true
    thamGiaLuc?: true
    _all?: true
  }

  export type CuocTroChuyenThanhVienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuocTroChuyenThanhVien to aggregate.
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyenThanhViens to fetch.
     */
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyenThanhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyenThanhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CuocTroChuyenThanhViens
    **/
    _count?: true | CuocTroChuyenThanhVienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuocTroChuyenThanhVienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuocTroChuyenThanhVienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuocTroChuyenThanhVienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuocTroChuyenThanhVienMaxAggregateInputType
  }

  export type GetCuocTroChuyenThanhVienAggregateType<T extends CuocTroChuyenThanhVienAggregateArgs> = {
        [P in keyof T & keyof AggregateCuocTroChuyenThanhVien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuocTroChuyenThanhVien[P]>
      : GetScalarType<T[P], AggregateCuocTroChuyenThanhVien[P]>
  }




  export type CuocTroChuyenThanhVienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuocTroChuyenThanhVienWhereInput
    orderBy?: CuocTroChuyenThanhVienOrderByWithAggregationInput | CuocTroChuyenThanhVienOrderByWithAggregationInput[]
    by: CuocTroChuyenThanhVienScalarFieldEnum[] | CuocTroChuyenThanhVienScalarFieldEnum
    having?: CuocTroChuyenThanhVienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuocTroChuyenThanhVienCountAggregateInputType | true
    _avg?: CuocTroChuyenThanhVienAvgAggregateInputType
    _sum?: CuocTroChuyenThanhVienSumAggregateInputType
    _min?: CuocTroChuyenThanhVienMinAggregateInputType
    _max?: CuocTroChuyenThanhVienMaxAggregateInputType
  }

  export type CuocTroChuyenThanhVienGroupByOutputType = {
    id: number
    nguoiDungId: number
    cuocTroChuyenId: number
    thamGiaLuc: Date
    _count: CuocTroChuyenThanhVienCountAggregateOutputType | null
    _avg: CuocTroChuyenThanhVienAvgAggregateOutputType | null
    _sum: CuocTroChuyenThanhVienSumAggregateOutputType | null
    _min: CuocTroChuyenThanhVienMinAggregateOutputType | null
    _max: CuocTroChuyenThanhVienMaxAggregateOutputType | null
  }

  type GetCuocTroChuyenThanhVienGroupByPayload<T extends CuocTroChuyenThanhVienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuocTroChuyenThanhVienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuocTroChuyenThanhVienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuocTroChuyenThanhVienGroupByOutputType[P]>
            : GetScalarType<T[P], CuocTroChuyenThanhVienGroupByOutputType[P]>
        }
      >
    >


  export type CuocTroChuyenThanhVienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nguoiDungId?: boolean
    cuocTroChuyenId?: boolean
    thamGiaLuc?: boolean
    cuocTroChuyen?: boolean | CuocTroChuyenDefaultArgs<ExtArgs>
    nguoiDung?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuocTroChuyenThanhVien"]>



  export type CuocTroChuyenThanhVienSelectScalar = {
    id?: boolean
    nguoiDungId?: boolean
    cuocTroChuyenId?: boolean
    thamGiaLuc?: boolean
  }

  export type CuocTroChuyenThanhVienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nguoiDungId" | "cuocTroChuyenId" | "thamGiaLuc", ExtArgs["result"]["cuocTroChuyenThanhVien"]>
  export type CuocTroChuyenThanhVienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuocTroChuyen?: boolean | CuocTroChuyenDefaultArgs<ExtArgs>
    nguoiDung?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CuocTroChuyenThanhVienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CuocTroChuyenThanhVien"
    objects: {
      cuocTroChuyen: Prisma.$CuocTroChuyenPayload<ExtArgs>
      nguoiDung: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nguoiDungId: number
      cuocTroChuyenId: number
      thamGiaLuc: Date
    }, ExtArgs["result"]["cuocTroChuyenThanhVien"]>
    composites: {}
  }

  type CuocTroChuyenThanhVienGetPayload<S extends boolean | null | undefined | CuocTroChuyenThanhVienDefaultArgs> = $Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload, S>

  type CuocTroChuyenThanhVienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuocTroChuyenThanhVienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuocTroChuyenThanhVienCountAggregateInputType | true
    }

  export interface CuocTroChuyenThanhVienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CuocTroChuyenThanhVien'], meta: { name: 'CuocTroChuyenThanhVien' } }
    /**
     * Find zero or one CuocTroChuyenThanhVien that matches the filter.
     * @param {CuocTroChuyenThanhVienFindUniqueArgs} args - Arguments to find a CuocTroChuyenThanhVien
     * @example
     * // Get one CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuocTroChuyenThanhVienFindUniqueArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienFindUniqueArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CuocTroChuyenThanhVien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuocTroChuyenThanhVienFindUniqueOrThrowArgs} args - Arguments to find a CuocTroChuyenThanhVien
     * @example
     * // Get one CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuocTroChuyenThanhVienFindUniqueOrThrowArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuocTroChuyenThanhVien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienFindFirstArgs} args - Arguments to find a CuocTroChuyenThanhVien
     * @example
     * // Get one CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuocTroChuyenThanhVienFindFirstArgs>(args?: SelectSubset<T, CuocTroChuyenThanhVienFindFirstArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CuocTroChuyenThanhVien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienFindFirstOrThrowArgs} args - Arguments to find a CuocTroChuyenThanhVien
     * @example
     * // Get one CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuocTroChuyenThanhVienFindFirstOrThrowArgs>(args?: SelectSubset<T, CuocTroChuyenThanhVienFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CuocTroChuyenThanhViens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CuocTroChuyenThanhViens
     * const cuocTroChuyenThanhViens = await prisma.cuocTroChuyenThanhVien.findMany()
     * 
     * // Get first 10 CuocTroChuyenThanhViens
     * const cuocTroChuyenThanhViens = await prisma.cuocTroChuyenThanhVien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuocTroChuyenThanhVienWithIdOnly = await prisma.cuocTroChuyenThanhVien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuocTroChuyenThanhVienFindManyArgs>(args?: SelectSubset<T, CuocTroChuyenThanhVienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CuocTroChuyenThanhVien.
     * @param {CuocTroChuyenThanhVienCreateArgs} args - Arguments to create a CuocTroChuyenThanhVien.
     * @example
     * // Create one CuocTroChuyenThanhVien
     * const CuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.create({
     *   data: {
     *     // ... data to create a CuocTroChuyenThanhVien
     *   }
     * })
     * 
     */
    create<T extends CuocTroChuyenThanhVienCreateArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienCreateArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CuocTroChuyenThanhViens.
     * @param {CuocTroChuyenThanhVienCreateManyArgs} args - Arguments to create many CuocTroChuyenThanhViens.
     * @example
     * // Create many CuocTroChuyenThanhViens
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuocTroChuyenThanhVienCreateManyArgs>(args?: SelectSubset<T, CuocTroChuyenThanhVienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CuocTroChuyenThanhVien.
     * @param {CuocTroChuyenThanhVienDeleteArgs} args - Arguments to delete one CuocTroChuyenThanhVien.
     * @example
     * // Delete one CuocTroChuyenThanhVien
     * const CuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.delete({
     *   where: {
     *     // ... filter to delete one CuocTroChuyenThanhVien
     *   }
     * })
     * 
     */
    delete<T extends CuocTroChuyenThanhVienDeleteArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienDeleteArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CuocTroChuyenThanhVien.
     * @param {CuocTroChuyenThanhVienUpdateArgs} args - Arguments to update one CuocTroChuyenThanhVien.
     * @example
     * // Update one CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuocTroChuyenThanhVienUpdateArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienUpdateArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CuocTroChuyenThanhViens.
     * @param {CuocTroChuyenThanhVienDeleteManyArgs} args - Arguments to filter CuocTroChuyenThanhViens to delete.
     * @example
     * // Delete a few CuocTroChuyenThanhViens
     * const { count } = await prisma.cuocTroChuyenThanhVien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuocTroChuyenThanhVienDeleteManyArgs>(args?: SelectSubset<T, CuocTroChuyenThanhVienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CuocTroChuyenThanhViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CuocTroChuyenThanhViens
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuocTroChuyenThanhVienUpdateManyArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CuocTroChuyenThanhVien.
     * @param {CuocTroChuyenThanhVienUpsertArgs} args - Arguments to update or create a CuocTroChuyenThanhVien.
     * @example
     * // Update or create a CuocTroChuyenThanhVien
     * const cuocTroChuyenThanhVien = await prisma.cuocTroChuyenThanhVien.upsert({
     *   create: {
     *     // ... data to create a CuocTroChuyenThanhVien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CuocTroChuyenThanhVien we want to update
     *   }
     * })
     */
    upsert<T extends CuocTroChuyenThanhVienUpsertArgs>(args: SelectSubset<T, CuocTroChuyenThanhVienUpsertArgs<ExtArgs>>): Prisma__CuocTroChuyenThanhVienClient<$Result.GetResult<Prisma.$CuocTroChuyenThanhVienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CuocTroChuyenThanhViens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienCountArgs} args - Arguments to filter CuocTroChuyenThanhViens to count.
     * @example
     * // Count the number of CuocTroChuyenThanhViens
     * const count = await prisma.cuocTroChuyenThanhVien.count({
     *   where: {
     *     // ... the filter for the CuocTroChuyenThanhViens we want to count
     *   }
     * })
    **/
    count<T extends CuocTroChuyenThanhVienCountArgs>(
      args?: Subset<T, CuocTroChuyenThanhVienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuocTroChuyenThanhVienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CuocTroChuyenThanhVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuocTroChuyenThanhVienAggregateArgs>(args: Subset<T, CuocTroChuyenThanhVienAggregateArgs>): Prisma.PrismaPromise<GetCuocTroChuyenThanhVienAggregateType<T>>

    /**
     * Group by CuocTroChuyenThanhVien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuocTroChuyenThanhVienGroupByArgs} args - Group by arguments.
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
      T extends CuocTroChuyenThanhVienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuocTroChuyenThanhVienGroupByArgs['orderBy'] }
        : { orderBy?: CuocTroChuyenThanhVienGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CuocTroChuyenThanhVienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuocTroChuyenThanhVienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CuocTroChuyenThanhVien model
   */
  readonly fields: CuocTroChuyenThanhVienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CuocTroChuyenThanhVien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuocTroChuyenThanhVienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuocTroChuyen<T extends CuocTroChuyenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuocTroChuyenDefaultArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoiDung<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CuocTroChuyenThanhVien model
   */
  interface CuocTroChuyenThanhVienFieldRefs {
    readonly id: FieldRef<"CuocTroChuyenThanhVien", 'Int'>
    readonly nguoiDungId: FieldRef<"CuocTroChuyenThanhVien", 'Int'>
    readonly cuocTroChuyenId: FieldRef<"CuocTroChuyenThanhVien", 'Int'>
    readonly thamGiaLuc: FieldRef<"CuocTroChuyenThanhVien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CuocTroChuyenThanhVien findUnique
   */
  export type CuocTroChuyenThanhVienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyenThanhVien to fetch.
     */
    where: CuocTroChuyenThanhVienWhereUniqueInput
  }

  /**
   * CuocTroChuyenThanhVien findUniqueOrThrow
   */
  export type CuocTroChuyenThanhVienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyenThanhVien to fetch.
     */
    where: CuocTroChuyenThanhVienWhereUniqueInput
  }

  /**
   * CuocTroChuyenThanhVien findFirst
   */
  export type CuocTroChuyenThanhVienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyenThanhVien to fetch.
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyenThanhViens to fetch.
     */
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuocTroChuyenThanhViens.
     */
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyenThanhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyenThanhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuocTroChuyenThanhViens.
     */
    distinct?: CuocTroChuyenThanhVienScalarFieldEnum | CuocTroChuyenThanhVienScalarFieldEnum[]
  }

  /**
   * CuocTroChuyenThanhVien findFirstOrThrow
   */
  export type CuocTroChuyenThanhVienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyenThanhVien to fetch.
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyenThanhViens to fetch.
     */
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CuocTroChuyenThanhViens.
     */
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyenThanhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyenThanhViens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CuocTroChuyenThanhViens.
     */
    distinct?: CuocTroChuyenThanhVienScalarFieldEnum | CuocTroChuyenThanhVienScalarFieldEnum[]
  }

  /**
   * CuocTroChuyenThanhVien findMany
   */
  export type CuocTroChuyenThanhVienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter, which CuocTroChuyenThanhViens to fetch.
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CuocTroChuyenThanhViens to fetch.
     */
    orderBy?: CuocTroChuyenThanhVienOrderByWithRelationInput | CuocTroChuyenThanhVienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CuocTroChuyenThanhViens.
     */
    cursor?: CuocTroChuyenThanhVienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CuocTroChuyenThanhViens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CuocTroChuyenThanhViens.
     */
    skip?: number
    distinct?: CuocTroChuyenThanhVienScalarFieldEnum | CuocTroChuyenThanhVienScalarFieldEnum[]
  }

  /**
   * CuocTroChuyenThanhVien create
   */
  export type CuocTroChuyenThanhVienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * The data needed to create a CuocTroChuyenThanhVien.
     */
    data: XOR<CuocTroChuyenThanhVienCreateInput, CuocTroChuyenThanhVienUncheckedCreateInput>
  }

  /**
   * CuocTroChuyenThanhVien createMany
   */
  export type CuocTroChuyenThanhVienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CuocTroChuyenThanhViens.
     */
    data: CuocTroChuyenThanhVienCreateManyInput | CuocTroChuyenThanhVienCreateManyInput[]
  }

  /**
   * CuocTroChuyenThanhVien update
   */
  export type CuocTroChuyenThanhVienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * The data needed to update a CuocTroChuyenThanhVien.
     */
    data: XOR<CuocTroChuyenThanhVienUpdateInput, CuocTroChuyenThanhVienUncheckedUpdateInput>
    /**
     * Choose, which CuocTroChuyenThanhVien to update.
     */
    where: CuocTroChuyenThanhVienWhereUniqueInput
  }

  /**
   * CuocTroChuyenThanhVien updateMany
   */
  export type CuocTroChuyenThanhVienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CuocTroChuyenThanhViens.
     */
    data: XOR<CuocTroChuyenThanhVienUpdateManyMutationInput, CuocTroChuyenThanhVienUncheckedUpdateManyInput>
    /**
     * Filter which CuocTroChuyenThanhViens to update
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * Limit how many CuocTroChuyenThanhViens to update.
     */
    limit?: number
  }

  /**
   * CuocTroChuyenThanhVien upsert
   */
  export type CuocTroChuyenThanhVienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * The filter to search for the CuocTroChuyenThanhVien to update in case it exists.
     */
    where: CuocTroChuyenThanhVienWhereUniqueInput
    /**
     * In case the CuocTroChuyenThanhVien found by the `where` argument doesn't exist, create a new CuocTroChuyenThanhVien with this data.
     */
    create: XOR<CuocTroChuyenThanhVienCreateInput, CuocTroChuyenThanhVienUncheckedCreateInput>
    /**
     * In case the CuocTroChuyenThanhVien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuocTroChuyenThanhVienUpdateInput, CuocTroChuyenThanhVienUncheckedUpdateInput>
  }

  /**
   * CuocTroChuyenThanhVien delete
   */
  export type CuocTroChuyenThanhVienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
    /**
     * Filter which CuocTroChuyenThanhVien to delete.
     */
    where: CuocTroChuyenThanhVienWhereUniqueInput
  }

  /**
   * CuocTroChuyenThanhVien deleteMany
   */
  export type CuocTroChuyenThanhVienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CuocTroChuyenThanhViens to delete
     */
    where?: CuocTroChuyenThanhVienWhereInput
    /**
     * Limit how many CuocTroChuyenThanhViens to delete.
     */
    limit?: number
  }

  /**
   * CuocTroChuyenThanhVien without action
   */
  export type CuocTroChuyenThanhVienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuocTroChuyenThanhVien
     */
    select?: CuocTroChuyenThanhVienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CuocTroChuyenThanhVien
     */
    omit?: CuocTroChuyenThanhVienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuocTroChuyenThanhVienInclude<ExtArgs> | null
  }


  /**
   * Model TinNhan
   */

  export type AggregateTinNhan = {
    _count: TinNhanCountAggregateOutputType | null
    _avg: TinNhanAvgAggregateOutputType | null
    _sum: TinNhanSumAggregateOutputType | null
    _min: TinNhanMinAggregateOutputType | null
    _max: TinNhanMaxAggregateOutputType | null
  }

  export type TinNhanAvgAggregateOutputType = {
    id: number | null
    cuocTroChuyenId: number | null
    nguoiGuiId: number | null
  }

  export type TinNhanSumAggregateOutputType = {
    id: number | null
    cuocTroChuyenId: number | null
    nguoiGuiId: number | null
  }

  export type TinNhanMinAggregateOutputType = {
    id: number | null
    cuocTroChuyenId: number | null
    nguoiGuiId: number | null
    noiDung: string | null
    guiLuc: Date | null
    daDoc: boolean | null
  }

  export type TinNhanMaxAggregateOutputType = {
    id: number | null
    cuocTroChuyenId: number | null
    nguoiGuiId: number | null
    noiDung: string | null
    guiLuc: Date | null
    daDoc: boolean | null
  }

  export type TinNhanCountAggregateOutputType = {
    id: number
    cuocTroChuyenId: number
    nguoiGuiId: number
    noiDung: number
    guiLuc: number
    daDoc: number
    _all: number
  }


  export type TinNhanAvgAggregateInputType = {
    id?: true
    cuocTroChuyenId?: true
    nguoiGuiId?: true
  }

  export type TinNhanSumAggregateInputType = {
    id?: true
    cuocTroChuyenId?: true
    nguoiGuiId?: true
  }

  export type TinNhanMinAggregateInputType = {
    id?: true
    cuocTroChuyenId?: true
    nguoiGuiId?: true
    noiDung?: true
    guiLuc?: true
    daDoc?: true
  }

  export type TinNhanMaxAggregateInputType = {
    id?: true
    cuocTroChuyenId?: true
    nguoiGuiId?: true
    noiDung?: true
    guiLuc?: true
    daDoc?: true
  }

  export type TinNhanCountAggregateInputType = {
    id?: true
    cuocTroChuyenId?: true
    nguoiGuiId?: true
    noiDung?: true
    guiLuc?: true
    daDoc?: true
    _all?: true
  }

  export type TinNhanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TinNhan to aggregate.
     */
    where?: TinNhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TinNhans to fetch.
     */
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TinNhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TinNhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TinNhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TinNhans
    **/
    _count?: true | TinNhanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TinNhanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TinNhanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TinNhanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TinNhanMaxAggregateInputType
  }

  export type GetTinNhanAggregateType<T extends TinNhanAggregateArgs> = {
        [P in keyof T & keyof AggregateTinNhan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTinNhan[P]>
      : GetScalarType<T[P], AggregateTinNhan[P]>
  }




  export type TinNhanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TinNhanWhereInput
    orderBy?: TinNhanOrderByWithAggregationInput | TinNhanOrderByWithAggregationInput[]
    by: TinNhanScalarFieldEnum[] | TinNhanScalarFieldEnum
    having?: TinNhanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TinNhanCountAggregateInputType | true
    _avg?: TinNhanAvgAggregateInputType
    _sum?: TinNhanSumAggregateInputType
    _min?: TinNhanMinAggregateInputType
    _max?: TinNhanMaxAggregateInputType
  }

  export type TinNhanGroupByOutputType = {
    id: number
    cuocTroChuyenId: number
    nguoiGuiId: number
    noiDung: string
    guiLuc: Date
    daDoc: boolean
    _count: TinNhanCountAggregateOutputType | null
    _avg: TinNhanAvgAggregateOutputType | null
    _sum: TinNhanSumAggregateOutputType | null
    _min: TinNhanMinAggregateOutputType | null
    _max: TinNhanMaxAggregateOutputType | null
  }

  type GetTinNhanGroupByPayload<T extends TinNhanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TinNhanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TinNhanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TinNhanGroupByOutputType[P]>
            : GetScalarType<T[P], TinNhanGroupByOutputType[P]>
        }
      >
    >


  export type TinNhanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cuocTroChuyenId?: boolean
    nguoiGuiId?: boolean
    noiDung?: boolean
    guiLuc?: boolean
    daDoc?: boolean
    cuocTroChuyen?: boolean | CuocTroChuyenDefaultArgs<ExtArgs>
    nguoiGui?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tinNhan"]>



  export type TinNhanSelectScalar = {
    id?: boolean
    cuocTroChuyenId?: boolean
    nguoiGuiId?: boolean
    noiDung?: boolean
    guiLuc?: boolean
    daDoc?: boolean
  }

  export type TinNhanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cuocTroChuyenId" | "nguoiGuiId" | "noiDung" | "guiLuc" | "daDoc", ExtArgs["result"]["tinNhan"]>
  export type TinNhanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuocTroChuyen?: boolean | CuocTroChuyenDefaultArgs<ExtArgs>
    nguoiGui?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TinNhanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TinNhan"
    objects: {
      cuocTroChuyen: Prisma.$CuocTroChuyenPayload<ExtArgs>
      nguoiGui: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cuocTroChuyenId: number
      nguoiGuiId: number
      noiDung: string
      guiLuc: Date
      daDoc: boolean
    }, ExtArgs["result"]["tinNhan"]>
    composites: {}
  }

  type TinNhanGetPayload<S extends boolean | null | undefined | TinNhanDefaultArgs> = $Result.GetResult<Prisma.$TinNhanPayload, S>

  type TinNhanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TinNhanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TinNhanCountAggregateInputType | true
    }

  export interface TinNhanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TinNhan'], meta: { name: 'TinNhan' } }
    /**
     * Find zero or one TinNhan that matches the filter.
     * @param {TinNhanFindUniqueArgs} args - Arguments to find a TinNhan
     * @example
     * // Get one TinNhan
     * const tinNhan = await prisma.tinNhan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TinNhanFindUniqueArgs>(args: SelectSubset<T, TinNhanFindUniqueArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TinNhan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TinNhanFindUniqueOrThrowArgs} args - Arguments to find a TinNhan
     * @example
     * // Get one TinNhan
     * const tinNhan = await prisma.tinNhan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TinNhanFindUniqueOrThrowArgs>(args: SelectSubset<T, TinNhanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TinNhan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanFindFirstArgs} args - Arguments to find a TinNhan
     * @example
     * // Get one TinNhan
     * const tinNhan = await prisma.tinNhan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TinNhanFindFirstArgs>(args?: SelectSubset<T, TinNhanFindFirstArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TinNhan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanFindFirstOrThrowArgs} args - Arguments to find a TinNhan
     * @example
     * // Get one TinNhan
     * const tinNhan = await prisma.tinNhan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TinNhanFindFirstOrThrowArgs>(args?: SelectSubset<T, TinNhanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TinNhans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TinNhans
     * const tinNhans = await prisma.tinNhan.findMany()
     * 
     * // Get first 10 TinNhans
     * const tinNhans = await prisma.tinNhan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tinNhanWithIdOnly = await prisma.tinNhan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TinNhanFindManyArgs>(args?: SelectSubset<T, TinNhanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TinNhan.
     * @param {TinNhanCreateArgs} args - Arguments to create a TinNhan.
     * @example
     * // Create one TinNhan
     * const TinNhan = await prisma.tinNhan.create({
     *   data: {
     *     // ... data to create a TinNhan
     *   }
     * })
     * 
     */
    create<T extends TinNhanCreateArgs>(args: SelectSubset<T, TinNhanCreateArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TinNhans.
     * @param {TinNhanCreateManyArgs} args - Arguments to create many TinNhans.
     * @example
     * // Create many TinNhans
     * const tinNhan = await prisma.tinNhan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TinNhanCreateManyArgs>(args?: SelectSubset<T, TinNhanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TinNhan.
     * @param {TinNhanDeleteArgs} args - Arguments to delete one TinNhan.
     * @example
     * // Delete one TinNhan
     * const TinNhan = await prisma.tinNhan.delete({
     *   where: {
     *     // ... filter to delete one TinNhan
     *   }
     * })
     * 
     */
    delete<T extends TinNhanDeleteArgs>(args: SelectSubset<T, TinNhanDeleteArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TinNhan.
     * @param {TinNhanUpdateArgs} args - Arguments to update one TinNhan.
     * @example
     * // Update one TinNhan
     * const tinNhan = await prisma.tinNhan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TinNhanUpdateArgs>(args: SelectSubset<T, TinNhanUpdateArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TinNhans.
     * @param {TinNhanDeleteManyArgs} args - Arguments to filter TinNhans to delete.
     * @example
     * // Delete a few TinNhans
     * const { count } = await prisma.tinNhan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TinNhanDeleteManyArgs>(args?: SelectSubset<T, TinNhanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TinNhans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TinNhans
     * const tinNhan = await prisma.tinNhan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TinNhanUpdateManyArgs>(args: SelectSubset<T, TinNhanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TinNhan.
     * @param {TinNhanUpsertArgs} args - Arguments to update or create a TinNhan.
     * @example
     * // Update or create a TinNhan
     * const tinNhan = await prisma.tinNhan.upsert({
     *   create: {
     *     // ... data to create a TinNhan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TinNhan we want to update
     *   }
     * })
     */
    upsert<T extends TinNhanUpsertArgs>(args: SelectSubset<T, TinNhanUpsertArgs<ExtArgs>>): Prisma__TinNhanClient<$Result.GetResult<Prisma.$TinNhanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TinNhans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanCountArgs} args - Arguments to filter TinNhans to count.
     * @example
     * // Count the number of TinNhans
     * const count = await prisma.tinNhan.count({
     *   where: {
     *     // ... the filter for the TinNhans we want to count
     *   }
     * })
    **/
    count<T extends TinNhanCountArgs>(
      args?: Subset<T, TinNhanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TinNhanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TinNhan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TinNhanAggregateArgs>(args: Subset<T, TinNhanAggregateArgs>): Prisma.PrismaPromise<GetTinNhanAggregateType<T>>

    /**
     * Group by TinNhan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TinNhanGroupByArgs} args - Group by arguments.
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
      T extends TinNhanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TinNhanGroupByArgs['orderBy'] }
        : { orderBy?: TinNhanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TinNhanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTinNhanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TinNhan model
   */
  readonly fields: TinNhanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TinNhan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TinNhanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuocTroChuyen<T extends CuocTroChuyenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuocTroChuyenDefaultArgs<ExtArgs>>): Prisma__CuocTroChuyenClient<$Result.GetResult<Prisma.$CuocTroChuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nguoiGui<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TinNhan model
   */
  interface TinNhanFieldRefs {
    readonly id: FieldRef<"TinNhan", 'Int'>
    readonly cuocTroChuyenId: FieldRef<"TinNhan", 'Int'>
    readonly nguoiGuiId: FieldRef<"TinNhan", 'Int'>
    readonly noiDung: FieldRef<"TinNhan", 'String'>
    readonly guiLuc: FieldRef<"TinNhan", 'DateTime'>
    readonly daDoc: FieldRef<"TinNhan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TinNhan findUnique
   */
  export type TinNhanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter, which TinNhan to fetch.
     */
    where: TinNhanWhereUniqueInput
  }

  /**
   * TinNhan findUniqueOrThrow
   */
  export type TinNhanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter, which TinNhan to fetch.
     */
    where: TinNhanWhereUniqueInput
  }

  /**
   * TinNhan findFirst
   */
  export type TinNhanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter, which TinNhan to fetch.
     */
    where?: TinNhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TinNhans to fetch.
     */
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TinNhans.
     */
    cursor?: TinNhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TinNhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TinNhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TinNhans.
     */
    distinct?: TinNhanScalarFieldEnum | TinNhanScalarFieldEnum[]
  }

  /**
   * TinNhan findFirstOrThrow
   */
  export type TinNhanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter, which TinNhan to fetch.
     */
    where?: TinNhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TinNhans to fetch.
     */
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TinNhans.
     */
    cursor?: TinNhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TinNhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TinNhans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TinNhans.
     */
    distinct?: TinNhanScalarFieldEnum | TinNhanScalarFieldEnum[]
  }

  /**
   * TinNhan findMany
   */
  export type TinNhanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter, which TinNhans to fetch.
     */
    where?: TinNhanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TinNhans to fetch.
     */
    orderBy?: TinNhanOrderByWithRelationInput | TinNhanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TinNhans.
     */
    cursor?: TinNhanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TinNhans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TinNhans.
     */
    skip?: number
    distinct?: TinNhanScalarFieldEnum | TinNhanScalarFieldEnum[]
  }

  /**
   * TinNhan create
   */
  export type TinNhanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * The data needed to create a TinNhan.
     */
    data: XOR<TinNhanCreateInput, TinNhanUncheckedCreateInput>
  }

  /**
   * TinNhan createMany
   */
  export type TinNhanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TinNhans.
     */
    data: TinNhanCreateManyInput | TinNhanCreateManyInput[]
  }

  /**
   * TinNhan update
   */
  export type TinNhanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * The data needed to update a TinNhan.
     */
    data: XOR<TinNhanUpdateInput, TinNhanUncheckedUpdateInput>
    /**
     * Choose, which TinNhan to update.
     */
    where: TinNhanWhereUniqueInput
  }

  /**
   * TinNhan updateMany
   */
  export type TinNhanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TinNhans.
     */
    data: XOR<TinNhanUpdateManyMutationInput, TinNhanUncheckedUpdateManyInput>
    /**
     * Filter which TinNhans to update
     */
    where?: TinNhanWhereInput
    /**
     * Limit how many TinNhans to update.
     */
    limit?: number
  }

  /**
   * TinNhan upsert
   */
  export type TinNhanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * The filter to search for the TinNhan to update in case it exists.
     */
    where: TinNhanWhereUniqueInput
    /**
     * In case the TinNhan found by the `where` argument doesn't exist, create a new TinNhan with this data.
     */
    create: XOR<TinNhanCreateInput, TinNhanUncheckedCreateInput>
    /**
     * In case the TinNhan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TinNhanUpdateInput, TinNhanUncheckedUpdateInput>
  }

  /**
   * TinNhan delete
   */
  export type TinNhanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
    /**
     * Filter which TinNhan to delete.
     */
    where: TinNhanWhereUniqueInput
  }

  /**
   * TinNhan deleteMany
   */
  export type TinNhanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TinNhans to delete
     */
    where?: TinNhanWhereInput
    /**
     * Limit how many TinNhans to delete.
     */
    limit?: number
  }

  /**
   * TinNhan without action
   */
  export type TinNhanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TinNhan
     */
    select?: TinNhanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TinNhan
     */
    omit?: TinNhanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TinNhanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    clerkId: 'clerkId',
    ten: 'ten',
    tieusu: 'tieusu',
    hinhanh: 'hinhanh',
    diachi: 'diachi',
    website: 'website',
    ngaytao: 'ngaytao',
    ngaycapnhat: 'ngaycapnhat'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BinhluanScalarFieldEnum: {
    id: 'id',
    noidung: 'noidung',
    baivietID: 'baivietID',
    tacgiaID: 'tacgiaID',
    ngaytao: 'ngaytao',
    ngaycapnhat: 'ngaycapnhat'
  };

  export type BinhluanScalarFieldEnum = (typeof BinhluanScalarFieldEnum)[keyof typeof BinhluanScalarFieldEnum]


  export const TheodoiScalarFieldEnum: {
    id: 'id',
    nguoidangtheodoiID: 'nguoidangtheodoiID',
    nguoitheodoiID: 'nguoitheodoiID',
    ngaytao: 'ngaytao'
  };

  export type TheodoiScalarFieldEnum = (typeof TheodoiScalarFieldEnum)[keyof typeof TheodoiScalarFieldEnum]


  export const BaivietScalarFieldEnum: {
    id: 'id',
    tacgiaID: 'tacgiaID',
    noidung: 'noidung',
    hinhanh: 'hinhanh',
    ngaytao: 'ngaytao',
    ngaycapnhat: 'ngaycapnhat',
    chudeID: 'chudeID'
  };

  export type BaivietScalarFieldEnum = (typeof BaivietScalarFieldEnum)[keyof typeof BaivietScalarFieldEnum]


  export const YeuthichScalarFieldEnum: {
    id: 'id',
    baivietID: 'baivietID',
    nguoidungID: 'nguoidungID',
    ngaytao: 'ngaytao'
  };

  export type YeuthichScalarFieldEnum = (typeof YeuthichScalarFieldEnum)[keyof typeof YeuthichScalarFieldEnum]


  export const ThongbaoScalarFieldEnum: {
    id: 'id',
    nguoidungID: 'nguoidungID',
    nguoitaoID: 'nguoitaoID',
    noidung: 'noidung',
    baivietID: 'baivietID',
    binhluanID: 'binhluanID',
    yeuthichID: 'yeuthichID',
    loai: 'loai',
    ngaytao: 'ngaytao',
    ngaycapnhat: 'ngaycapnhat',
    daXem: 'daXem'
  };

  export type ThongbaoScalarFieldEnum = (typeof ThongbaoScalarFieldEnum)[keyof typeof ThongbaoScalarFieldEnum]


  export const ChudeScalarFieldEnum: {
    id: 'id',
    ten: 'ten'
  };

  export type ChudeScalarFieldEnum = (typeof ChudeScalarFieldEnum)[keyof typeof ChudeScalarFieldEnum]


  export const CuocTroChuyenScalarFieldEnum: {
    id: 'id',
    taoLuc: 'taoLuc',
    capNhatLuc: 'capNhatLuc'
  };

  export type CuocTroChuyenScalarFieldEnum = (typeof CuocTroChuyenScalarFieldEnum)[keyof typeof CuocTroChuyenScalarFieldEnum]


  export const CuocTroChuyenThanhVienScalarFieldEnum: {
    id: 'id',
    nguoiDungId: 'nguoiDungId',
    cuocTroChuyenId: 'cuocTroChuyenId',
    thamGiaLuc: 'thamGiaLuc'
  };

  export type CuocTroChuyenThanhVienScalarFieldEnum = (typeof CuocTroChuyenThanhVienScalarFieldEnum)[keyof typeof CuocTroChuyenThanhVienScalarFieldEnum]


  export const TinNhanScalarFieldEnum: {
    id: 'id',
    cuocTroChuyenId: 'cuocTroChuyenId',
    nguoiGuiId: 'nguoiGuiId',
    noiDung: 'noiDung',
    guiLuc: 'guiLuc',
    daDoc: 'daDoc'
  };

  export type TinNhanScalarFieldEnum = (typeof TinNhanScalarFieldEnum)[keyof typeof TinNhanScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    ten?: StringNullableFilter<"User"> | string | null
    tieusu?: StringNullableFilter<"User"> | string | null
    hinhanh?: StringNullableFilter<"User"> | string | null
    diachi?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    ngaytao?: DateTimeFilter<"User"> | Date | string
    ngaycapnhat?: DateTimeFilter<"User"> | Date | string
    baiviet?: BaivietListRelationFilter
    binhluan?: BinhluanListRelationFilter
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienListRelationFilter
    dangtheodoi?: TheodoiListRelationFilter
    nguoitheodoi?: TheodoiListRelationFilter
    thongbao?: ThongbaoListRelationFilter
    thongbaoDaTao?: ThongbaoListRelationFilter
    tinNhanGui?: TinNhanListRelationFilter
    yeuthich?: YeuthichListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    clerkId?: SortOrder
    ten?: SortOrderInput | SortOrder
    tieusu?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    baiviet?: BaivietOrderByRelationAggregateInput
    binhluan?: BinhluanOrderByRelationAggregateInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienOrderByRelationAggregateInput
    dangtheodoi?: TheodoiOrderByRelationAggregateInput
    nguoitheodoi?: TheodoiOrderByRelationAggregateInput
    thongbao?: ThongbaoOrderByRelationAggregateInput
    thongbaoDaTao?: ThongbaoOrderByRelationAggregateInput
    tinNhanGui?: TinNhanOrderByRelationAggregateInput
    yeuthich?: YeuthichOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    ten?: StringNullableFilter<"User"> | string | null
    tieusu?: StringNullableFilter<"User"> | string | null
    hinhanh?: StringNullableFilter<"User"> | string | null
    diachi?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    ngaytao?: DateTimeFilter<"User"> | Date | string
    ngaycapnhat?: DateTimeFilter<"User"> | Date | string
    baiviet?: BaivietListRelationFilter
    binhluan?: BinhluanListRelationFilter
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienListRelationFilter
    dangtheodoi?: TheodoiListRelationFilter
    nguoitheodoi?: TheodoiListRelationFilter
    thongbao?: ThongbaoListRelationFilter
    thongbaoDaTao?: ThongbaoListRelationFilter
    tinNhanGui?: TinNhanListRelationFilter
    yeuthich?: YeuthichListRelationFilter
  }, "id" | "email" | "username" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    clerkId?: SortOrder
    ten?: SortOrderInput | SortOrder
    tieusu?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    diachi?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    ten?: StringNullableWithAggregatesFilter<"User"> | string | null
    tieusu?: StringNullableWithAggregatesFilter<"User"> | string | null
    hinhanh?: StringNullableWithAggregatesFilter<"User"> | string | null
    diachi?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    ngaytao?: DateTimeWithAggregatesFilter<"User"> | Date | string
    ngaycapnhat?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BinhluanWhereInput = {
    AND?: BinhluanWhereInput | BinhluanWhereInput[]
    OR?: BinhluanWhereInput[]
    NOT?: BinhluanWhereInput | BinhluanWhereInput[]
    id?: IntFilter<"Binhluan"> | number
    noidung?: StringFilter<"Binhluan"> | string
    baivietID?: IntFilter<"Binhluan"> | number
    tacgiaID?: IntFilter<"Binhluan"> | number
    ngaytao?: DateTimeFilter<"Binhluan"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Binhluan"> | Date | string
    baiviet?: XOR<BaivietScalarRelationFilter, BaivietWhereInput>
    tacgia?: XOR<UserScalarRelationFilter, UserWhereInput>
    thongbao?: ThongbaoListRelationFilter
  }

  export type BinhluanOrderByWithRelationInput = {
    id?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    baiviet?: BaivietOrderByWithRelationInput
    tacgia?: UserOrderByWithRelationInput
    thongbao?: ThongbaoOrderByRelationAggregateInput
  }

  export type BinhluanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BinhluanWhereInput | BinhluanWhereInput[]
    OR?: BinhluanWhereInput[]
    NOT?: BinhluanWhereInput | BinhluanWhereInput[]
    noidung?: StringFilter<"Binhluan"> | string
    baivietID?: IntFilter<"Binhluan"> | number
    tacgiaID?: IntFilter<"Binhluan"> | number
    ngaytao?: DateTimeFilter<"Binhluan"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Binhluan"> | Date | string
    baiviet?: XOR<BaivietScalarRelationFilter, BaivietWhereInput>
    tacgia?: XOR<UserScalarRelationFilter, UserWhereInput>
    thongbao?: ThongbaoListRelationFilter
  }, "id">

  export type BinhluanOrderByWithAggregationInput = {
    id?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    _count?: BinhluanCountOrderByAggregateInput
    _avg?: BinhluanAvgOrderByAggregateInput
    _max?: BinhluanMaxOrderByAggregateInput
    _min?: BinhluanMinOrderByAggregateInput
    _sum?: BinhluanSumOrderByAggregateInput
  }

  export type BinhluanScalarWhereWithAggregatesInput = {
    AND?: BinhluanScalarWhereWithAggregatesInput | BinhluanScalarWhereWithAggregatesInput[]
    OR?: BinhluanScalarWhereWithAggregatesInput[]
    NOT?: BinhluanScalarWhereWithAggregatesInput | BinhluanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Binhluan"> | number
    noidung?: StringWithAggregatesFilter<"Binhluan"> | string
    baivietID?: IntWithAggregatesFilter<"Binhluan"> | number
    tacgiaID?: IntWithAggregatesFilter<"Binhluan"> | number
    ngaytao?: DateTimeWithAggregatesFilter<"Binhluan"> | Date | string
    ngaycapnhat?: DateTimeWithAggregatesFilter<"Binhluan"> | Date | string
  }

  export type TheodoiWhereInput = {
    AND?: TheodoiWhereInput | TheodoiWhereInput[]
    OR?: TheodoiWhereInput[]
    NOT?: TheodoiWhereInput | TheodoiWhereInput[]
    id?: IntFilter<"Theodoi"> | number
    nguoidangtheodoiID?: IntFilter<"Theodoi"> | number
    nguoitheodoiID?: IntFilter<"Theodoi"> | number
    ngaytao?: DateTimeFilter<"Theodoi"> | Date | string
    nguoiTheoDoi?: XOR<UserScalarRelationFilter, UserWhereInput>
    nguoiDuocTheoDoi?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TheodoiOrderByWithRelationInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
    ngaytao?: SortOrder
    nguoiTheoDoi?: UserOrderByWithRelationInput
    nguoiDuocTheoDoi?: UserOrderByWithRelationInput
  }

  export type TheodoiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nguoidangtheodoiID_nguoitheodoiID?: TheodoiNguoidangtheodoiIDNguoitheodoiIDCompoundUniqueInput
    AND?: TheodoiWhereInput | TheodoiWhereInput[]
    OR?: TheodoiWhereInput[]
    NOT?: TheodoiWhereInput | TheodoiWhereInput[]
    nguoidangtheodoiID?: IntFilter<"Theodoi"> | number
    nguoitheodoiID?: IntFilter<"Theodoi"> | number
    ngaytao?: DateTimeFilter<"Theodoi"> | Date | string
    nguoiTheoDoi?: XOR<UserScalarRelationFilter, UserWhereInput>
    nguoiDuocTheoDoi?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "nguoidangtheodoiID_nguoitheodoiID">

  export type TheodoiOrderByWithAggregationInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
    ngaytao?: SortOrder
    _count?: TheodoiCountOrderByAggregateInput
    _avg?: TheodoiAvgOrderByAggregateInput
    _max?: TheodoiMaxOrderByAggregateInput
    _min?: TheodoiMinOrderByAggregateInput
    _sum?: TheodoiSumOrderByAggregateInput
  }

  export type TheodoiScalarWhereWithAggregatesInput = {
    AND?: TheodoiScalarWhereWithAggregatesInput | TheodoiScalarWhereWithAggregatesInput[]
    OR?: TheodoiScalarWhereWithAggregatesInput[]
    NOT?: TheodoiScalarWhereWithAggregatesInput | TheodoiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theodoi"> | number
    nguoidangtheodoiID?: IntWithAggregatesFilter<"Theodoi"> | number
    nguoitheodoiID?: IntWithAggregatesFilter<"Theodoi"> | number
    ngaytao?: DateTimeWithAggregatesFilter<"Theodoi"> | Date | string
  }

  export type BaivietWhereInput = {
    AND?: BaivietWhereInput | BaivietWhereInput[]
    OR?: BaivietWhereInput[]
    NOT?: BaivietWhereInput | BaivietWhereInput[]
    id?: IntFilter<"Baiviet"> | number
    tacgiaID?: IntFilter<"Baiviet"> | number
    noidung?: StringNullableFilter<"Baiviet"> | string | null
    hinhanh?: StringNullableFilter<"Baiviet"> | string | null
    ngaytao?: DateTimeFilter<"Baiviet"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Baiviet"> | Date | string
    chudeID?: IntFilter<"Baiviet"> | number
    chude?: XOR<ChudeScalarRelationFilter, ChudeWhereInput>
    tacgia?: XOR<UserScalarRelationFilter, UserWhereInput>
    binhluan?: BinhluanListRelationFilter
    thongbao?: ThongbaoListRelationFilter
    yeuthich?: YeuthichListRelationFilter
  }

  export type BaivietOrderByWithRelationInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    noidung?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    chudeID?: SortOrder
    chude?: ChudeOrderByWithRelationInput
    tacgia?: UserOrderByWithRelationInput
    binhluan?: BinhluanOrderByRelationAggregateInput
    thongbao?: ThongbaoOrderByRelationAggregateInput
    yeuthich?: YeuthichOrderByRelationAggregateInput
  }

  export type BaivietWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BaivietWhereInput | BaivietWhereInput[]
    OR?: BaivietWhereInput[]
    NOT?: BaivietWhereInput | BaivietWhereInput[]
    tacgiaID?: IntFilter<"Baiviet"> | number
    noidung?: StringNullableFilter<"Baiviet"> | string | null
    hinhanh?: StringNullableFilter<"Baiviet"> | string | null
    ngaytao?: DateTimeFilter<"Baiviet"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Baiviet"> | Date | string
    chudeID?: IntFilter<"Baiviet"> | number
    chude?: XOR<ChudeScalarRelationFilter, ChudeWhereInput>
    tacgia?: XOR<UserScalarRelationFilter, UserWhereInput>
    binhluan?: BinhluanListRelationFilter
    thongbao?: ThongbaoListRelationFilter
    yeuthich?: YeuthichListRelationFilter
  }, "id">

  export type BaivietOrderByWithAggregationInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    noidung?: SortOrderInput | SortOrder
    hinhanh?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    chudeID?: SortOrder
    _count?: BaivietCountOrderByAggregateInput
    _avg?: BaivietAvgOrderByAggregateInput
    _max?: BaivietMaxOrderByAggregateInput
    _min?: BaivietMinOrderByAggregateInput
    _sum?: BaivietSumOrderByAggregateInput
  }

  export type BaivietScalarWhereWithAggregatesInput = {
    AND?: BaivietScalarWhereWithAggregatesInput | BaivietScalarWhereWithAggregatesInput[]
    OR?: BaivietScalarWhereWithAggregatesInput[]
    NOT?: BaivietScalarWhereWithAggregatesInput | BaivietScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Baiviet"> | number
    tacgiaID?: IntWithAggregatesFilter<"Baiviet"> | number
    noidung?: StringNullableWithAggregatesFilter<"Baiviet"> | string | null
    hinhanh?: StringNullableWithAggregatesFilter<"Baiviet"> | string | null
    ngaytao?: DateTimeWithAggregatesFilter<"Baiviet"> | Date | string
    ngaycapnhat?: DateTimeWithAggregatesFilter<"Baiviet"> | Date | string
    chudeID?: IntWithAggregatesFilter<"Baiviet"> | number
  }

  export type YeuthichWhereInput = {
    AND?: YeuthichWhereInput | YeuthichWhereInput[]
    OR?: YeuthichWhereInput[]
    NOT?: YeuthichWhereInput | YeuthichWhereInput[]
    id?: IntFilter<"Yeuthich"> | number
    baivietID?: IntFilter<"Yeuthich"> | number
    nguoidungID?: IntFilter<"Yeuthich"> | number
    ngaytao?: DateTimeFilter<"Yeuthich"> | Date | string
    thongbao?: ThongbaoListRelationFilter
    baiviet?: XOR<BaivietScalarRelationFilter, BaivietWhereInput>
    nguoidung?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type YeuthichOrderByWithRelationInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
    ngaytao?: SortOrder
    thongbao?: ThongbaoOrderByRelationAggregateInput
    baiviet?: BaivietOrderByWithRelationInput
    nguoidung?: UserOrderByWithRelationInput
  }

  export type YeuthichWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nguoidungID_baivietID?: YeuthichNguoidungIDBaivietIDCompoundUniqueInput
    AND?: YeuthichWhereInput | YeuthichWhereInput[]
    OR?: YeuthichWhereInput[]
    NOT?: YeuthichWhereInput | YeuthichWhereInput[]
    baivietID?: IntFilter<"Yeuthich"> | number
    nguoidungID?: IntFilter<"Yeuthich"> | number
    ngaytao?: DateTimeFilter<"Yeuthich"> | Date | string
    thongbao?: ThongbaoListRelationFilter
    baiviet?: XOR<BaivietScalarRelationFilter, BaivietWhereInput>
    nguoidung?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "nguoidungID_baivietID">

  export type YeuthichOrderByWithAggregationInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
    ngaytao?: SortOrder
    _count?: YeuthichCountOrderByAggregateInput
    _avg?: YeuthichAvgOrderByAggregateInput
    _max?: YeuthichMaxOrderByAggregateInput
    _min?: YeuthichMinOrderByAggregateInput
    _sum?: YeuthichSumOrderByAggregateInput
  }

  export type YeuthichScalarWhereWithAggregatesInput = {
    AND?: YeuthichScalarWhereWithAggregatesInput | YeuthichScalarWhereWithAggregatesInput[]
    OR?: YeuthichScalarWhereWithAggregatesInput[]
    NOT?: YeuthichScalarWhereWithAggregatesInput | YeuthichScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Yeuthich"> | number
    baivietID?: IntWithAggregatesFilter<"Yeuthich"> | number
    nguoidungID?: IntWithAggregatesFilter<"Yeuthich"> | number
    ngaytao?: DateTimeWithAggregatesFilter<"Yeuthich"> | Date | string
  }

  export type ThongbaoWhereInput = {
    AND?: ThongbaoWhereInput | ThongbaoWhereInput[]
    OR?: ThongbaoWhereInput[]
    NOT?: ThongbaoWhereInput | ThongbaoWhereInput[]
    id?: IntFilter<"Thongbao"> | number
    nguoidungID?: IntFilter<"Thongbao"> | number
    nguoitaoID?: IntFilter<"Thongbao"> | number
    noidung?: StringNullableFilter<"Thongbao"> | string | null
    baivietID?: IntNullableFilter<"Thongbao"> | number | null
    binhluanID?: IntNullableFilter<"Thongbao"> | number | null
    yeuthichID?: IntNullableFilter<"Thongbao"> | number | null
    loai?: StringNullableFilter<"Thongbao"> | string | null
    ngaytao?: DateTimeFilter<"Thongbao"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Thongbao"> | Date | string
    daXem?: BoolFilter<"Thongbao"> | boolean
    baiviet?: XOR<BaivietNullableScalarRelationFilter, BaivietWhereInput> | null
    binhluan?: XOR<BinhluanNullableScalarRelationFilter, BinhluanWhereInput> | null
    nguoidung?: XOR<UserScalarRelationFilter, UserWhereInput>
    nguoitao?: XOR<UserScalarRelationFilter, UserWhereInput>
    yeuthich?: XOR<YeuthichNullableScalarRelationFilter, YeuthichWhereInput> | null
  }

  export type ThongbaoOrderByWithRelationInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    noidung?: SortOrderInput | SortOrder
    baivietID?: SortOrderInput | SortOrder
    binhluanID?: SortOrderInput | SortOrder
    yeuthichID?: SortOrderInput | SortOrder
    loai?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    daXem?: SortOrder
    baiviet?: BaivietOrderByWithRelationInput
    binhluan?: BinhluanOrderByWithRelationInput
    nguoidung?: UserOrderByWithRelationInput
    nguoitao?: UserOrderByWithRelationInput
    yeuthich?: YeuthichOrderByWithRelationInput
  }

  export type ThongbaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThongbaoWhereInput | ThongbaoWhereInput[]
    OR?: ThongbaoWhereInput[]
    NOT?: ThongbaoWhereInput | ThongbaoWhereInput[]
    nguoidungID?: IntFilter<"Thongbao"> | number
    nguoitaoID?: IntFilter<"Thongbao"> | number
    noidung?: StringNullableFilter<"Thongbao"> | string | null
    baivietID?: IntNullableFilter<"Thongbao"> | number | null
    binhluanID?: IntNullableFilter<"Thongbao"> | number | null
    yeuthichID?: IntNullableFilter<"Thongbao"> | number | null
    loai?: StringNullableFilter<"Thongbao"> | string | null
    ngaytao?: DateTimeFilter<"Thongbao"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Thongbao"> | Date | string
    daXem?: BoolFilter<"Thongbao"> | boolean
    baiviet?: XOR<BaivietNullableScalarRelationFilter, BaivietWhereInput> | null
    binhluan?: XOR<BinhluanNullableScalarRelationFilter, BinhluanWhereInput> | null
    nguoidung?: XOR<UserScalarRelationFilter, UserWhereInput>
    nguoitao?: XOR<UserScalarRelationFilter, UserWhereInput>
    yeuthich?: XOR<YeuthichNullableScalarRelationFilter, YeuthichWhereInput> | null
  }, "id">

  export type ThongbaoOrderByWithAggregationInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    noidung?: SortOrderInput | SortOrder
    baivietID?: SortOrderInput | SortOrder
    binhluanID?: SortOrderInput | SortOrder
    yeuthichID?: SortOrderInput | SortOrder
    loai?: SortOrderInput | SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    daXem?: SortOrder
    _count?: ThongbaoCountOrderByAggregateInput
    _avg?: ThongbaoAvgOrderByAggregateInput
    _max?: ThongbaoMaxOrderByAggregateInput
    _min?: ThongbaoMinOrderByAggregateInput
    _sum?: ThongbaoSumOrderByAggregateInput
  }

  export type ThongbaoScalarWhereWithAggregatesInput = {
    AND?: ThongbaoScalarWhereWithAggregatesInput | ThongbaoScalarWhereWithAggregatesInput[]
    OR?: ThongbaoScalarWhereWithAggregatesInput[]
    NOT?: ThongbaoScalarWhereWithAggregatesInput | ThongbaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thongbao"> | number
    nguoidungID?: IntWithAggregatesFilter<"Thongbao"> | number
    nguoitaoID?: IntWithAggregatesFilter<"Thongbao"> | number
    noidung?: StringNullableWithAggregatesFilter<"Thongbao"> | string | null
    baivietID?: IntNullableWithAggregatesFilter<"Thongbao"> | number | null
    binhluanID?: IntNullableWithAggregatesFilter<"Thongbao"> | number | null
    yeuthichID?: IntNullableWithAggregatesFilter<"Thongbao"> | number | null
    loai?: StringNullableWithAggregatesFilter<"Thongbao"> | string | null
    ngaytao?: DateTimeWithAggregatesFilter<"Thongbao"> | Date | string
    ngaycapnhat?: DateTimeWithAggregatesFilter<"Thongbao"> | Date | string
    daXem?: BoolWithAggregatesFilter<"Thongbao"> | boolean
  }

  export type ChudeWhereInput = {
    AND?: ChudeWhereInput | ChudeWhereInput[]
    OR?: ChudeWhereInput[]
    NOT?: ChudeWhereInput | ChudeWhereInput[]
    id?: IntFilter<"Chude"> | number
    ten?: StringFilter<"Chude"> | string
    baiviet?: BaivietListRelationFilter
  }

  export type ChudeOrderByWithRelationInput = {
    id?: SortOrder
    ten?: SortOrder
    baiviet?: BaivietOrderByRelationAggregateInput
  }

  export type ChudeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ten?: string
    AND?: ChudeWhereInput | ChudeWhereInput[]
    OR?: ChudeWhereInput[]
    NOT?: ChudeWhereInput | ChudeWhereInput[]
    baiviet?: BaivietListRelationFilter
  }, "id" | "ten">

  export type ChudeOrderByWithAggregationInput = {
    id?: SortOrder
    ten?: SortOrder
    _count?: ChudeCountOrderByAggregateInput
    _avg?: ChudeAvgOrderByAggregateInput
    _max?: ChudeMaxOrderByAggregateInput
    _min?: ChudeMinOrderByAggregateInput
    _sum?: ChudeSumOrderByAggregateInput
  }

  export type ChudeScalarWhereWithAggregatesInput = {
    AND?: ChudeScalarWhereWithAggregatesInput | ChudeScalarWhereWithAggregatesInput[]
    OR?: ChudeScalarWhereWithAggregatesInput[]
    NOT?: ChudeScalarWhereWithAggregatesInput | ChudeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chude"> | number
    ten?: StringWithAggregatesFilter<"Chude"> | string
  }

  export type CuocTroChuyenWhereInput = {
    AND?: CuocTroChuyenWhereInput | CuocTroChuyenWhereInput[]
    OR?: CuocTroChuyenWhereInput[]
    NOT?: CuocTroChuyenWhereInput | CuocTroChuyenWhereInput[]
    id?: IntFilter<"CuocTroChuyen"> | number
    taoLuc?: DateTimeFilter<"CuocTroChuyen"> | Date | string
    capNhatLuc?: DateTimeFilter<"CuocTroChuyen"> | Date | string
    thanhVien?: CuocTroChuyenThanhVienListRelationFilter
    tinNhan?: TinNhanListRelationFilter
  }

  export type CuocTroChuyenOrderByWithRelationInput = {
    id?: SortOrder
    taoLuc?: SortOrder
    capNhatLuc?: SortOrder
    thanhVien?: CuocTroChuyenThanhVienOrderByRelationAggregateInput
    tinNhan?: TinNhanOrderByRelationAggregateInput
  }

  export type CuocTroChuyenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CuocTroChuyenWhereInput | CuocTroChuyenWhereInput[]
    OR?: CuocTroChuyenWhereInput[]
    NOT?: CuocTroChuyenWhereInput | CuocTroChuyenWhereInput[]
    taoLuc?: DateTimeFilter<"CuocTroChuyen"> | Date | string
    capNhatLuc?: DateTimeFilter<"CuocTroChuyen"> | Date | string
    thanhVien?: CuocTroChuyenThanhVienListRelationFilter
    tinNhan?: TinNhanListRelationFilter
  }, "id">

  export type CuocTroChuyenOrderByWithAggregationInput = {
    id?: SortOrder
    taoLuc?: SortOrder
    capNhatLuc?: SortOrder
    _count?: CuocTroChuyenCountOrderByAggregateInput
    _avg?: CuocTroChuyenAvgOrderByAggregateInput
    _max?: CuocTroChuyenMaxOrderByAggregateInput
    _min?: CuocTroChuyenMinOrderByAggregateInput
    _sum?: CuocTroChuyenSumOrderByAggregateInput
  }

  export type CuocTroChuyenScalarWhereWithAggregatesInput = {
    AND?: CuocTroChuyenScalarWhereWithAggregatesInput | CuocTroChuyenScalarWhereWithAggregatesInput[]
    OR?: CuocTroChuyenScalarWhereWithAggregatesInput[]
    NOT?: CuocTroChuyenScalarWhereWithAggregatesInput | CuocTroChuyenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CuocTroChuyen"> | number
    taoLuc?: DateTimeWithAggregatesFilter<"CuocTroChuyen"> | Date | string
    capNhatLuc?: DateTimeWithAggregatesFilter<"CuocTroChuyen"> | Date | string
  }

  export type CuocTroChuyenThanhVienWhereInput = {
    AND?: CuocTroChuyenThanhVienWhereInput | CuocTroChuyenThanhVienWhereInput[]
    OR?: CuocTroChuyenThanhVienWhereInput[]
    NOT?: CuocTroChuyenThanhVienWhereInput | CuocTroChuyenThanhVienWhereInput[]
    id?: IntFilter<"CuocTroChuyenThanhVien"> | number
    nguoiDungId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    cuocTroChuyenId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    thamGiaLuc?: DateTimeFilter<"CuocTroChuyenThanhVien"> | Date | string
    cuocTroChuyen?: XOR<CuocTroChuyenScalarRelationFilter, CuocTroChuyenWhereInput>
    nguoiDung?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CuocTroChuyenThanhVienOrderByWithRelationInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
    thamGiaLuc?: SortOrder
    cuocTroChuyen?: CuocTroChuyenOrderByWithRelationInput
    nguoiDung?: UserOrderByWithRelationInput
  }

  export type CuocTroChuyenThanhVienWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nguoiDungId_cuocTroChuyenId?: CuocTroChuyenThanhVienNguoiDungIdCuocTroChuyenIdCompoundUniqueInput
    AND?: CuocTroChuyenThanhVienWhereInput | CuocTroChuyenThanhVienWhereInput[]
    OR?: CuocTroChuyenThanhVienWhereInput[]
    NOT?: CuocTroChuyenThanhVienWhereInput | CuocTroChuyenThanhVienWhereInput[]
    nguoiDungId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    cuocTroChuyenId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    thamGiaLuc?: DateTimeFilter<"CuocTroChuyenThanhVien"> | Date | string
    cuocTroChuyen?: XOR<CuocTroChuyenScalarRelationFilter, CuocTroChuyenWhereInput>
    nguoiDung?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "nguoiDungId_cuocTroChuyenId">

  export type CuocTroChuyenThanhVienOrderByWithAggregationInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
    thamGiaLuc?: SortOrder
    _count?: CuocTroChuyenThanhVienCountOrderByAggregateInput
    _avg?: CuocTroChuyenThanhVienAvgOrderByAggregateInput
    _max?: CuocTroChuyenThanhVienMaxOrderByAggregateInput
    _min?: CuocTroChuyenThanhVienMinOrderByAggregateInput
    _sum?: CuocTroChuyenThanhVienSumOrderByAggregateInput
  }

  export type CuocTroChuyenThanhVienScalarWhereWithAggregatesInput = {
    AND?: CuocTroChuyenThanhVienScalarWhereWithAggregatesInput | CuocTroChuyenThanhVienScalarWhereWithAggregatesInput[]
    OR?: CuocTroChuyenThanhVienScalarWhereWithAggregatesInput[]
    NOT?: CuocTroChuyenThanhVienScalarWhereWithAggregatesInput | CuocTroChuyenThanhVienScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CuocTroChuyenThanhVien"> | number
    nguoiDungId?: IntWithAggregatesFilter<"CuocTroChuyenThanhVien"> | number
    cuocTroChuyenId?: IntWithAggregatesFilter<"CuocTroChuyenThanhVien"> | number
    thamGiaLuc?: DateTimeWithAggregatesFilter<"CuocTroChuyenThanhVien"> | Date | string
  }

  export type TinNhanWhereInput = {
    AND?: TinNhanWhereInput | TinNhanWhereInput[]
    OR?: TinNhanWhereInput[]
    NOT?: TinNhanWhereInput | TinNhanWhereInput[]
    id?: IntFilter<"TinNhan"> | number
    cuocTroChuyenId?: IntFilter<"TinNhan"> | number
    nguoiGuiId?: IntFilter<"TinNhan"> | number
    noiDung?: StringFilter<"TinNhan"> | string
    guiLuc?: DateTimeFilter<"TinNhan"> | Date | string
    daDoc?: BoolFilter<"TinNhan"> | boolean
    cuocTroChuyen?: XOR<CuocTroChuyenScalarRelationFilter, CuocTroChuyenWhereInput>
    nguoiGui?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TinNhanOrderByWithRelationInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
    noiDung?: SortOrder
    guiLuc?: SortOrder
    daDoc?: SortOrder
    cuocTroChuyen?: CuocTroChuyenOrderByWithRelationInput
    nguoiGui?: UserOrderByWithRelationInput
  }

  export type TinNhanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TinNhanWhereInput | TinNhanWhereInput[]
    OR?: TinNhanWhereInput[]
    NOT?: TinNhanWhereInput | TinNhanWhereInput[]
    cuocTroChuyenId?: IntFilter<"TinNhan"> | number
    nguoiGuiId?: IntFilter<"TinNhan"> | number
    noiDung?: StringFilter<"TinNhan"> | string
    guiLuc?: DateTimeFilter<"TinNhan"> | Date | string
    daDoc?: BoolFilter<"TinNhan"> | boolean
    cuocTroChuyen?: XOR<CuocTroChuyenScalarRelationFilter, CuocTroChuyenWhereInput>
    nguoiGui?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TinNhanOrderByWithAggregationInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
    noiDung?: SortOrder
    guiLuc?: SortOrder
    daDoc?: SortOrder
    _count?: TinNhanCountOrderByAggregateInput
    _avg?: TinNhanAvgOrderByAggregateInput
    _max?: TinNhanMaxOrderByAggregateInput
    _min?: TinNhanMinOrderByAggregateInput
    _sum?: TinNhanSumOrderByAggregateInput
  }

  export type TinNhanScalarWhereWithAggregatesInput = {
    AND?: TinNhanScalarWhereWithAggregatesInput | TinNhanScalarWhereWithAggregatesInput[]
    OR?: TinNhanScalarWhereWithAggregatesInput[]
    NOT?: TinNhanScalarWhereWithAggregatesInput | TinNhanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TinNhan"> | number
    cuocTroChuyenId?: IntWithAggregatesFilter<"TinNhan"> | number
    nguoiGuiId?: IntWithAggregatesFilter<"TinNhan"> | number
    noiDung?: StringWithAggregatesFilter<"TinNhan"> | string
    guiLuc?: DateTimeWithAggregatesFilter<"TinNhan"> | Date | string
    daDoc?: BoolWithAggregatesFilter<"TinNhan"> | boolean
  }

  export type UserCreateInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type UserCreateManyInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhluanCreateInput = {
    noidung: string
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet: BaivietCreateNestedOneWithoutBinhluanInput
    tacgia: UserCreateNestedOneWithoutBinhluanInput
    thongbao?: ThongbaoCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanUncheckedCreateInput = {
    id?: number
    noidung: string
    baivietID: number
    tacgiaID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanUpdateInput = {
    noidung?: StringFieldUpdateOperationsInput | string
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateOneRequiredWithoutBinhluanNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBinhluanNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    baivietID?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanCreateManyInput = {
    noidung: string
    baivietID: number
    tacgiaID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type BinhluanUpdateManyMutationInput = {
    noidung?: StringFieldUpdateOperationsInput | string
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinhluanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    baivietID?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiCreateInput = {
    ngaytao?: Date | string
    nguoiTheoDoi: UserCreateNestedOneWithoutDangtheodoiInput
    nguoiDuocTheoDoi: UserCreateNestedOneWithoutNguoitheodoiInput
  }

  export type TheodoiUncheckedCreateInput = {
    id?: number
    nguoidangtheodoiID: number
    nguoitheodoiID: number
    ngaytao?: Date | string
  }

  export type TheodoiUpdateInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    nguoiTheoDoi?: UserUpdateOneRequiredWithoutDangtheodoiNestedInput
    nguoiDuocTheoDoi?: UserUpdateOneRequiredWithoutNguoitheodoiNestedInput
  }

  export type TheodoiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidangtheodoiID?: IntFieldUpdateOperationsInput | number
    nguoitheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiCreateManyInput = {
    nguoidangtheodoiID: number
    nguoitheodoiID: number
    ngaytao?: Date | string
  }

  export type TheodoiUpdateManyMutationInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidangtheodoiID?: IntFieldUpdateOperationsInput | number
    nguoitheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaivietCreateInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chude: ChudeCreateNestedOneWithoutBaivietInput
    tacgia: UserCreateNestedOneWithoutBaivietInput
    binhluan?: BinhluanCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateInput = {
    id?: number
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUpdateInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chude?: ChudeUpdateOneRequiredWithoutBaivietNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBaivietNestedInput
    binhluan?: BinhluanUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
    binhluan?: BinhluanUncheckedUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietCreateManyInput = {
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
  }

  export type BaivietUpdateManyMutationInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaivietUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
  }

  export type YeuthichCreateInput = {
    ngaytao?: Date | string
    thongbao?: ThongbaoCreateNestedManyWithoutYeuthichInput
    baiviet: BaivietCreateNestedOneWithoutYeuthichInput
    nguoidung: UserCreateNestedOneWithoutYeuthichInput
  }

  export type YeuthichUncheckedCreateInput = {
    id?: number
    baivietID: number
    nguoidungID: number
    ngaytao?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutYeuthichInput
  }

  export type YeuthichUpdateInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUpdateManyWithoutYeuthichNestedInput
    baiviet?: BaivietUpdateOneRequiredWithoutYeuthichNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    baivietID?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutYeuthichNestedInput
  }

  export type YeuthichCreateManyInput = {
    baivietID: number
    nguoidungID: number
    ngaytao?: Date | string
  }

  export type YeuthichUpdateManyMutationInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YeuthichUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    baivietID?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThongbaoCreateInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    baiviet?: BaivietCreateNestedOneWithoutThongbaoInput
    binhluan?: BinhluanCreateNestedOneWithoutThongbaoInput
    nguoidung: UserCreateNestedOneWithoutThongbaoInput
    nguoitao: UserCreateNestedOneWithoutThongbaoDaTaoInput
    yeuthich?: YeuthichCreateNestedOneWithoutThongbaoInput
  }

  export type ThongbaoUncheckedCreateInput = {
    id?: number
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoUpdateInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    baiviet?: BaivietUpdateOneWithoutThongbaoNestedInput
    binhluan?: BinhluanUpdateOneWithoutThongbaoNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutThongbaoNestedInput
    nguoitao?: UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput
    yeuthich?: YeuthichUpdateOneWithoutThongbaoNestedInput
  }

  export type ThongbaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoCreateManyInput = {
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoUpdateManyMutationInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChudeCreateInput = {
    ten: string
    baiviet?: BaivietCreateNestedManyWithoutChudeInput
  }

  export type ChudeUncheckedCreateInput = {
    id?: number
    ten: string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutChudeInput
  }

  export type ChudeUpdateInput = {
    ten?: StringFieldUpdateOperationsInput | string
    baiviet?: BaivietUpdateManyWithoutChudeNestedInput
  }

  export type ChudeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten?: StringFieldUpdateOperationsInput | string
    baiviet?: BaivietUncheckedUpdateManyWithoutChudeNestedInput
  }

  export type ChudeCreateManyInput = {
    ten: string
  }

  export type ChudeUpdateManyMutationInput = {
    ten?: StringFieldUpdateOperationsInput | string
  }

  export type ChudeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten?: StringFieldUpdateOperationsInput | string
  }

  export type CuocTroChuyenCreateInput = {
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    thanhVien?: CuocTroChuyenThanhVienCreateNestedManyWithoutCuocTroChuyenInput
    tinNhan?: TinNhanCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenUncheckedCreateInput = {
    id?: number
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    thanhVien?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutCuocTroChuyenInput
    tinNhan?: TinNhanUncheckedCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenUpdateInput = {
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    thanhVien?: CuocTroChuyenThanhVienUpdateManyWithoutCuocTroChuyenNestedInput
    tinNhan?: TinNhanUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    thanhVien?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutCuocTroChuyenNestedInput
    tinNhan?: TinNhanUncheckedUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenCreateManyInput = {
    taoLuc?: Date | string
    capNhatLuc?: Date | string
  }

  export type CuocTroChuyenUpdateManyMutationInput = {
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienCreateInput = {
    thamGiaLuc?: Date | string
    cuocTroChuyen: CuocTroChuyenCreateNestedOneWithoutThanhVienInput
    nguoiDung: UserCreateNestedOneWithoutThamGiaCuocTroChuyenInput
  }

  export type CuocTroChuyenThanhVienUncheckedCreateInput = {
    id?: number
    nguoiDungId: number
    cuocTroChuyenId: number
    thamGiaLuc?: Date | string
  }

  export type CuocTroChuyenThanhVienUpdateInput = {
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    cuocTroChuyen?: CuocTroChuyenUpdateOneRequiredWithoutThanhVienNestedInput
    nguoiDung?: UserUpdateOneRequiredWithoutThamGiaCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiDungId?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienCreateManyInput = {
    nguoiDungId: number
    cuocTroChuyenId: number
    thamGiaLuc?: Date | string
  }

  export type CuocTroChuyenThanhVienUpdateManyMutationInput = {
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiDungId?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TinNhanCreateInput = {
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
    cuocTroChuyen: CuocTroChuyenCreateNestedOneWithoutTinNhanInput
    nguoiGui: UserCreateNestedOneWithoutTinNhanGuiInput
  }

  export type TinNhanUncheckedCreateInput = {
    id?: number
    cuocTroChuyenId: number
    nguoiGuiId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type TinNhanUpdateInput = {
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
    cuocTroChuyen?: CuocTroChuyenUpdateOneRequiredWithoutTinNhanNestedInput
    nguoiGui?: UserUpdateOneRequiredWithoutTinNhanGuiNestedInput
  }

  export type TinNhanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    nguoiGuiId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TinNhanCreateManyInput = {
    cuocTroChuyenId: number
    nguoiGuiId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type TinNhanUpdateManyMutationInput = {
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TinNhanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    nguoiGuiId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
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

  export type BaivietListRelationFilter = {
    every?: BaivietWhereInput
    some?: BaivietWhereInput
    none?: BaivietWhereInput
  }

  export type BinhluanListRelationFilter = {
    every?: BinhluanWhereInput
    some?: BinhluanWhereInput
    none?: BinhluanWhereInput
  }

  export type CuocTroChuyenThanhVienListRelationFilter = {
    every?: CuocTroChuyenThanhVienWhereInput
    some?: CuocTroChuyenThanhVienWhereInput
    none?: CuocTroChuyenThanhVienWhereInput
  }

  export type TheodoiListRelationFilter = {
    every?: TheodoiWhereInput
    some?: TheodoiWhereInput
    none?: TheodoiWhereInput
  }

  export type ThongbaoListRelationFilter = {
    every?: ThongbaoWhereInput
    some?: ThongbaoWhereInput
    none?: ThongbaoWhereInput
  }

  export type TinNhanListRelationFilter = {
    every?: TinNhanWhereInput
    some?: TinNhanWhereInput
    none?: TinNhanWhereInput
  }

  export type YeuthichListRelationFilter = {
    every?: YeuthichWhereInput
    some?: YeuthichWhereInput
    none?: YeuthichWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BaivietOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BinhluanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuocTroChuyenThanhVienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TheodoiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThongbaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TinNhanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YeuthichOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    clerkId?: SortOrder
    ten?: SortOrder
    tieusu?: SortOrder
    hinhanh?: SortOrder
    diachi?: SortOrder
    website?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    clerkId?: SortOrder
    ten?: SortOrder
    tieusu?: SortOrder
    hinhanh?: SortOrder
    diachi?: SortOrder
    website?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    clerkId?: SortOrder
    ten?: SortOrder
    tieusu?: SortOrder
    hinhanh?: SortOrder
    diachi?: SortOrder
    website?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BaivietScalarRelationFilter = {
    is?: BaivietWhereInput
    isNot?: BaivietWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BinhluanCountOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type BinhluanAvgOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
  }

  export type BinhluanMaxOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type BinhluanMinOrderByAggregateInput = {
    id?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
  }

  export type BinhluanSumOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    tacgiaID?: SortOrder
  }

  export type TheodoiNguoidangtheodoiIDNguoitheodoiIDCompoundUniqueInput = {
    nguoidangtheodoiID: number
    nguoitheodoiID: number
  }

  export type TheodoiCountOrderByAggregateInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
    ngaytao?: SortOrder
  }

  export type TheodoiAvgOrderByAggregateInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
  }

  export type TheodoiMaxOrderByAggregateInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
    ngaytao?: SortOrder
  }

  export type TheodoiMinOrderByAggregateInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
    ngaytao?: SortOrder
  }

  export type TheodoiSumOrderByAggregateInput = {
    id?: SortOrder
    nguoidangtheodoiID?: SortOrder
    nguoitheodoiID?: SortOrder
  }

  export type ChudeScalarRelationFilter = {
    is?: ChudeWhereInput
    isNot?: ChudeWhereInput
  }

  export type BaivietCountOrderByAggregateInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    noidung?: SortOrder
    hinhanh?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    chudeID?: SortOrder
  }

  export type BaivietAvgOrderByAggregateInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    chudeID?: SortOrder
  }

  export type BaivietMaxOrderByAggregateInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    noidung?: SortOrder
    hinhanh?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    chudeID?: SortOrder
  }

  export type BaivietMinOrderByAggregateInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    noidung?: SortOrder
    hinhanh?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    chudeID?: SortOrder
  }

  export type BaivietSumOrderByAggregateInput = {
    id?: SortOrder
    tacgiaID?: SortOrder
    chudeID?: SortOrder
  }

  export type YeuthichNguoidungIDBaivietIDCompoundUniqueInput = {
    nguoidungID: number
    baivietID: number
  }

  export type YeuthichCountOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
    ngaytao?: SortOrder
  }

  export type YeuthichAvgOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
  }

  export type YeuthichMaxOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
    ngaytao?: SortOrder
  }

  export type YeuthichMinOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
    ngaytao?: SortOrder
  }

  export type YeuthichSumOrderByAggregateInput = {
    id?: SortOrder
    baivietID?: SortOrder
    nguoidungID?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BaivietNullableScalarRelationFilter = {
    is?: BaivietWhereInput | null
    isNot?: BaivietWhereInput | null
  }

  export type BinhluanNullableScalarRelationFilter = {
    is?: BinhluanWhereInput | null
    isNot?: BinhluanWhereInput | null
  }

  export type YeuthichNullableScalarRelationFilter = {
    is?: YeuthichWhereInput | null
    isNot?: YeuthichWhereInput | null
  }

  export type ThongbaoCountOrderByAggregateInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    binhluanID?: SortOrder
    yeuthichID?: SortOrder
    loai?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    daXem?: SortOrder
  }

  export type ThongbaoAvgOrderByAggregateInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    baivietID?: SortOrder
    binhluanID?: SortOrder
    yeuthichID?: SortOrder
  }

  export type ThongbaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    binhluanID?: SortOrder
    yeuthichID?: SortOrder
    loai?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    daXem?: SortOrder
  }

  export type ThongbaoMinOrderByAggregateInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    noidung?: SortOrder
    baivietID?: SortOrder
    binhluanID?: SortOrder
    yeuthichID?: SortOrder
    loai?: SortOrder
    ngaytao?: SortOrder
    ngaycapnhat?: SortOrder
    daXem?: SortOrder
  }

  export type ThongbaoSumOrderByAggregateInput = {
    id?: SortOrder
    nguoidungID?: SortOrder
    nguoitaoID?: SortOrder
    baivietID?: SortOrder
    binhluanID?: SortOrder
    yeuthichID?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChudeCountOrderByAggregateInput = {
    id?: SortOrder
    ten?: SortOrder
  }

  export type ChudeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChudeMaxOrderByAggregateInput = {
    id?: SortOrder
    ten?: SortOrder
  }

  export type ChudeMinOrderByAggregateInput = {
    id?: SortOrder
    ten?: SortOrder
  }

  export type ChudeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuocTroChuyenCountOrderByAggregateInput = {
    id?: SortOrder
    taoLuc?: SortOrder
    capNhatLuc?: SortOrder
  }

  export type CuocTroChuyenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuocTroChuyenMaxOrderByAggregateInput = {
    id?: SortOrder
    taoLuc?: SortOrder
    capNhatLuc?: SortOrder
  }

  export type CuocTroChuyenMinOrderByAggregateInput = {
    id?: SortOrder
    taoLuc?: SortOrder
    capNhatLuc?: SortOrder
  }

  export type CuocTroChuyenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CuocTroChuyenScalarRelationFilter = {
    is?: CuocTroChuyenWhereInput
    isNot?: CuocTroChuyenWhereInput
  }

  export type CuocTroChuyenThanhVienNguoiDungIdCuocTroChuyenIdCompoundUniqueInput = {
    nguoiDungId: number
    cuocTroChuyenId: number
  }

  export type CuocTroChuyenThanhVienCountOrderByAggregateInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
    thamGiaLuc?: SortOrder
  }

  export type CuocTroChuyenThanhVienAvgOrderByAggregateInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
  }

  export type CuocTroChuyenThanhVienMaxOrderByAggregateInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
    thamGiaLuc?: SortOrder
  }

  export type CuocTroChuyenThanhVienMinOrderByAggregateInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
    thamGiaLuc?: SortOrder
  }

  export type CuocTroChuyenThanhVienSumOrderByAggregateInput = {
    id?: SortOrder
    nguoiDungId?: SortOrder
    cuocTroChuyenId?: SortOrder
  }

  export type TinNhanCountOrderByAggregateInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
    noiDung?: SortOrder
    guiLuc?: SortOrder
    daDoc?: SortOrder
  }

  export type TinNhanAvgOrderByAggregateInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
  }

  export type TinNhanMaxOrderByAggregateInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
    noiDung?: SortOrder
    guiLuc?: SortOrder
    daDoc?: SortOrder
  }

  export type TinNhanMinOrderByAggregateInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
    noiDung?: SortOrder
    guiLuc?: SortOrder
    daDoc?: SortOrder
  }

  export type TinNhanSumOrderByAggregateInput = {
    id?: SortOrder
    cuocTroChuyenId?: SortOrder
    nguoiGuiId?: SortOrder
  }

  export type BaivietCreateNestedManyWithoutTacgiaInput = {
    create?: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput> | BaivietCreateWithoutTacgiaInput[] | BaivietUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutTacgiaInput | BaivietCreateOrConnectWithoutTacgiaInput[]
    createMany?: BaivietCreateManyTacgiaInputEnvelope
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
  }

  export type BinhluanCreateNestedManyWithoutTacgiaInput = {
    create?: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput> | BinhluanCreateWithoutTacgiaInput[] | BinhluanUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutTacgiaInput | BinhluanCreateOrConnectWithoutTacgiaInput[]
    createMany?: BinhluanCreateManyTacgiaInputEnvelope
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
  }

  export type CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput> | CuocTroChuyenThanhVienCreateWithoutNguoiDungInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput | CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyNguoiDungInputEnvelope
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
  }

  export type TheodoiCreateNestedManyWithoutNguoiTheoDoiInput = {
    create?: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput> | TheodoiCreateWithoutNguoiTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiTheoDoiInputEnvelope
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
  }

  export type TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput = {
    create?: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput> | TheodoiCreateWithoutNguoiDuocTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiDuocTheoDoiInputEnvelope
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
  }

  export type ThongbaoCreateNestedManyWithoutNguoidungInput = {
    create?: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput> | ThongbaoCreateWithoutNguoidungInput[] | ThongbaoUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoidungInput | ThongbaoCreateOrConnectWithoutNguoidungInput[]
    createMany?: ThongbaoCreateManyNguoidungInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type ThongbaoCreateNestedManyWithoutNguoitaoInput = {
    create?: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput> | ThongbaoCreateWithoutNguoitaoInput[] | ThongbaoUncheckedCreateWithoutNguoitaoInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoitaoInput | ThongbaoCreateOrConnectWithoutNguoitaoInput[]
    createMany?: ThongbaoCreateManyNguoitaoInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type TinNhanCreateNestedManyWithoutNguoiGuiInput = {
    create?: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput> | TinNhanCreateWithoutNguoiGuiInput[] | TinNhanUncheckedCreateWithoutNguoiGuiInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutNguoiGuiInput | TinNhanCreateOrConnectWithoutNguoiGuiInput[]
    createMany?: TinNhanCreateManyNguoiGuiInputEnvelope
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
  }

  export type YeuthichCreateNestedManyWithoutNguoidungInput = {
    create?: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput> | YeuthichCreateWithoutNguoidungInput[] | YeuthichUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutNguoidungInput | YeuthichCreateOrConnectWithoutNguoidungInput[]
    createMany?: YeuthichCreateManyNguoidungInputEnvelope
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
  }

  export type BaivietUncheckedCreateNestedManyWithoutTacgiaInput = {
    create?: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput> | BaivietCreateWithoutTacgiaInput[] | BaivietUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutTacgiaInput | BaivietCreateOrConnectWithoutTacgiaInput[]
    createMany?: BaivietCreateManyTacgiaInputEnvelope
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
  }

  export type BinhluanUncheckedCreateNestedManyWithoutTacgiaInput = {
    create?: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput> | BinhluanCreateWithoutTacgiaInput[] | BinhluanUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutTacgiaInput | BinhluanCreateOrConnectWithoutTacgiaInput[]
    createMany?: BinhluanCreateManyTacgiaInputEnvelope
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
  }

  export type CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput> | CuocTroChuyenThanhVienCreateWithoutNguoiDungInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput | CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyNguoiDungInputEnvelope
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
  }

  export type TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput = {
    create?: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput> | TheodoiCreateWithoutNguoiTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiTheoDoiInputEnvelope
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
  }

  export type TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput = {
    create?: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput> | TheodoiCreateWithoutNguoiDuocTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiDuocTheoDoiInputEnvelope
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
  }

  export type ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput = {
    create?: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput> | ThongbaoCreateWithoutNguoidungInput[] | ThongbaoUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoidungInput | ThongbaoCreateOrConnectWithoutNguoidungInput[]
    createMany?: ThongbaoCreateManyNguoidungInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput = {
    create?: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput> | ThongbaoCreateWithoutNguoitaoInput[] | ThongbaoUncheckedCreateWithoutNguoitaoInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoitaoInput | ThongbaoCreateOrConnectWithoutNguoitaoInput[]
    createMany?: ThongbaoCreateManyNguoitaoInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput = {
    create?: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput> | TinNhanCreateWithoutNguoiGuiInput[] | TinNhanUncheckedCreateWithoutNguoiGuiInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutNguoiGuiInput | TinNhanCreateOrConnectWithoutNguoiGuiInput[]
    createMany?: TinNhanCreateManyNguoiGuiInputEnvelope
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
  }

  export type YeuthichUncheckedCreateNestedManyWithoutNguoidungInput = {
    create?: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput> | YeuthichCreateWithoutNguoidungInput[] | YeuthichUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutNguoidungInput | YeuthichCreateOrConnectWithoutNguoidungInput[]
    createMany?: YeuthichCreateManyNguoidungInputEnvelope
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BaivietUpdateManyWithoutTacgiaNestedInput = {
    create?: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput> | BaivietCreateWithoutTacgiaInput[] | BaivietUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutTacgiaInput | BaivietCreateOrConnectWithoutTacgiaInput[]
    upsert?: BaivietUpsertWithWhereUniqueWithoutTacgiaInput | BaivietUpsertWithWhereUniqueWithoutTacgiaInput[]
    createMany?: BaivietCreateManyTacgiaInputEnvelope
    set?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    disconnect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    delete?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    update?: BaivietUpdateWithWhereUniqueWithoutTacgiaInput | BaivietUpdateWithWhereUniqueWithoutTacgiaInput[]
    updateMany?: BaivietUpdateManyWithWhereWithoutTacgiaInput | BaivietUpdateManyWithWhereWithoutTacgiaInput[]
    deleteMany?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
  }

  export type BinhluanUpdateManyWithoutTacgiaNestedInput = {
    create?: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput> | BinhluanCreateWithoutTacgiaInput[] | BinhluanUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutTacgiaInput | BinhluanCreateOrConnectWithoutTacgiaInput[]
    upsert?: BinhluanUpsertWithWhereUniqueWithoutTacgiaInput | BinhluanUpsertWithWhereUniqueWithoutTacgiaInput[]
    createMany?: BinhluanCreateManyTacgiaInputEnvelope
    set?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    disconnect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    delete?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    update?: BinhluanUpdateWithWhereUniqueWithoutTacgiaInput | BinhluanUpdateWithWhereUniqueWithoutTacgiaInput[]
    updateMany?: BinhluanUpdateManyWithWhereWithoutTacgiaInput | BinhluanUpdateManyWithWhereWithoutTacgiaInput[]
    deleteMany?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
  }

  export type CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput> | CuocTroChuyenThanhVienCreateWithoutNguoiDungInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput | CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput[]
    upsert?: CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutNguoiDungInput | CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyNguoiDungInputEnvelope
    set?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    disconnect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    delete?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    update?: CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutNguoiDungInput | CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: CuocTroChuyenThanhVienUpdateManyWithWhereWithoutNguoiDungInput | CuocTroChuyenThanhVienUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
  }

  export type TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput = {
    create?: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput> | TheodoiCreateWithoutNguoiTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiTheoDoiInput[]
    upsert?: TheodoiUpsertWithWhereUniqueWithoutNguoiTheoDoiInput | TheodoiUpsertWithWhereUniqueWithoutNguoiTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiTheoDoiInputEnvelope
    set?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    disconnect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    delete?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    update?: TheodoiUpdateWithWhereUniqueWithoutNguoiTheoDoiInput | TheodoiUpdateWithWhereUniqueWithoutNguoiTheoDoiInput[]
    updateMany?: TheodoiUpdateManyWithWhereWithoutNguoiTheoDoiInput | TheodoiUpdateManyWithWhereWithoutNguoiTheoDoiInput[]
    deleteMany?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
  }

  export type TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput = {
    create?: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput> | TheodoiCreateWithoutNguoiDuocTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput[]
    upsert?: TheodoiUpsertWithWhereUniqueWithoutNguoiDuocTheoDoiInput | TheodoiUpsertWithWhereUniqueWithoutNguoiDuocTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiDuocTheoDoiInputEnvelope
    set?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    disconnect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    delete?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    update?: TheodoiUpdateWithWhereUniqueWithoutNguoiDuocTheoDoiInput | TheodoiUpdateWithWhereUniqueWithoutNguoiDuocTheoDoiInput[]
    updateMany?: TheodoiUpdateManyWithWhereWithoutNguoiDuocTheoDoiInput | TheodoiUpdateManyWithWhereWithoutNguoiDuocTheoDoiInput[]
    deleteMany?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
  }

  export type ThongbaoUpdateManyWithoutNguoidungNestedInput = {
    create?: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput> | ThongbaoCreateWithoutNguoidungInput[] | ThongbaoUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoidungInput | ThongbaoCreateOrConnectWithoutNguoidungInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutNguoidungInput | ThongbaoUpsertWithWhereUniqueWithoutNguoidungInput[]
    createMany?: ThongbaoCreateManyNguoidungInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutNguoidungInput | ThongbaoUpdateWithWhereUniqueWithoutNguoidungInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutNguoidungInput | ThongbaoUpdateManyWithWhereWithoutNguoidungInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type ThongbaoUpdateManyWithoutNguoitaoNestedInput = {
    create?: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput> | ThongbaoCreateWithoutNguoitaoInput[] | ThongbaoUncheckedCreateWithoutNguoitaoInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoitaoInput | ThongbaoCreateOrConnectWithoutNguoitaoInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutNguoitaoInput | ThongbaoUpsertWithWhereUniqueWithoutNguoitaoInput[]
    createMany?: ThongbaoCreateManyNguoitaoInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutNguoitaoInput | ThongbaoUpdateWithWhereUniqueWithoutNguoitaoInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutNguoitaoInput | ThongbaoUpdateManyWithWhereWithoutNguoitaoInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type TinNhanUpdateManyWithoutNguoiGuiNestedInput = {
    create?: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput> | TinNhanCreateWithoutNguoiGuiInput[] | TinNhanUncheckedCreateWithoutNguoiGuiInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutNguoiGuiInput | TinNhanCreateOrConnectWithoutNguoiGuiInput[]
    upsert?: TinNhanUpsertWithWhereUniqueWithoutNguoiGuiInput | TinNhanUpsertWithWhereUniqueWithoutNguoiGuiInput[]
    createMany?: TinNhanCreateManyNguoiGuiInputEnvelope
    set?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    disconnect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    delete?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    update?: TinNhanUpdateWithWhereUniqueWithoutNguoiGuiInput | TinNhanUpdateWithWhereUniqueWithoutNguoiGuiInput[]
    updateMany?: TinNhanUpdateManyWithWhereWithoutNguoiGuiInput | TinNhanUpdateManyWithWhereWithoutNguoiGuiInput[]
    deleteMany?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
  }

  export type YeuthichUpdateManyWithoutNguoidungNestedInput = {
    create?: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput> | YeuthichCreateWithoutNguoidungInput[] | YeuthichUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutNguoidungInput | YeuthichCreateOrConnectWithoutNguoidungInput[]
    upsert?: YeuthichUpsertWithWhereUniqueWithoutNguoidungInput | YeuthichUpsertWithWhereUniqueWithoutNguoidungInput[]
    createMany?: YeuthichCreateManyNguoidungInputEnvelope
    set?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    disconnect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    delete?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    update?: YeuthichUpdateWithWhereUniqueWithoutNguoidungInput | YeuthichUpdateWithWhereUniqueWithoutNguoidungInput[]
    updateMany?: YeuthichUpdateManyWithWhereWithoutNguoidungInput | YeuthichUpdateManyWithWhereWithoutNguoidungInput[]
    deleteMany?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaivietUncheckedUpdateManyWithoutTacgiaNestedInput = {
    create?: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput> | BaivietCreateWithoutTacgiaInput[] | BaivietUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutTacgiaInput | BaivietCreateOrConnectWithoutTacgiaInput[]
    upsert?: BaivietUpsertWithWhereUniqueWithoutTacgiaInput | BaivietUpsertWithWhereUniqueWithoutTacgiaInput[]
    createMany?: BaivietCreateManyTacgiaInputEnvelope
    set?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    disconnect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    delete?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    update?: BaivietUpdateWithWhereUniqueWithoutTacgiaInput | BaivietUpdateWithWhereUniqueWithoutTacgiaInput[]
    updateMany?: BaivietUpdateManyWithWhereWithoutTacgiaInput | BaivietUpdateManyWithWhereWithoutTacgiaInput[]
    deleteMany?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
  }

  export type BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput = {
    create?: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput> | BinhluanCreateWithoutTacgiaInput[] | BinhluanUncheckedCreateWithoutTacgiaInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutTacgiaInput | BinhluanCreateOrConnectWithoutTacgiaInput[]
    upsert?: BinhluanUpsertWithWhereUniqueWithoutTacgiaInput | BinhluanUpsertWithWhereUniqueWithoutTacgiaInput[]
    createMany?: BinhluanCreateManyTacgiaInputEnvelope
    set?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    disconnect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    delete?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    update?: BinhluanUpdateWithWhereUniqueWithoutTacgiaInput | BinhluanUpdateWithWhereUniqueWithoutTacgiaInput[]
    updateMany?: BinhluanUpdateManyWithWhereWithoutTacgiaInput | BinhluanUpdateManyWithWhereWithoutTacgiaInput[]
    deleteMany?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput> | CuocTroChuyenThanhVienCreateWithoutNguoiDungInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput | CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput[]
    upsert?: CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutNguoiDungInput | CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyNguoiDungInputEnvelope
    set?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    disconnect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    delete?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    update?: CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutNguoiDungInput | CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: CuocTroChuyenThanhVienUpdateManyWithWhereWithoutNguoiDungInput | CuocTroChuyenThanhVienUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
  }

  export type TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput = {
    create?: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput> | TheodoiCreateWithoutNguoiTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiTheoDoiInput[]
    upsert?: TheodoiUpsertWithWhereUniqueWithoutNguoiTheoDoiInput | TheodoiUpsertWithWhereUniqueWithoutNguoiTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiTheoDoiInputEnvelope
    set?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    disconnect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    delete?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    update?: TheodoiUpdateWithWhereUniqueWithoutNguoiTheoDoiInput | TheodoiUpdateWithWhereUniqueWithoutNguoiTheoDoiInput[]
    updateMany?: TheodoiUpdateManyWithWhereWithoutNguoiTheoDoiInput | TheodoiUpdateManyWithWhereWithoutNguoiTheoDoiInput[]
    deleteMany?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
  }

  export type TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput = {
    create?: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput> | TheodoiCreateWithoutNguoiDuocTheoDoiInput[] | TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput[]
    connectOrCreate?: TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput | TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput[]
    upsert?: TheodoiUpsertWithWhereUniqueWithoutNguoiDuocTheoDoiInput | TheodoiUpsertWithWhereUniqueWithoutNguoiDuocTheoDoiInput[]
    createMany?: TheodoiCreateManyNguoiDuocTheoDoiInputEnvelope
    set?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    disconnect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    delete?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    connect?: TheodoiWhereUniqueInput | TheodoiWhereUniqueInput[]
    update?: TheodoiUpdateWithWhereUniqueWithoutNguoiDuocTheoDoiInput | TheodoiUpdateWithWhereUniqueWithoutNguoiDuocTheoDoiInput[]
    updateMany?: TheodoiUpdateManyWithWhereWithoutNguoiDuocTheoDoiInput | TheodoiUpdateManyWithWhereWithoutNguoiDuocTheoDoiInput[]
    deleteMany?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
  }

  export type ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput = {
    create?: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput> | ThongbaoCreateWithoutNguoidungInput[] | ThongbaoUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoidungInput | ThongbaoCreateOrConnectWithoutNguoidungInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutNguoidungInput | ThongbaoUpsertWithWhereUniqueWithoutNguoidungInput[]
    createMany?: ThongbaoCreateManyNguoidungInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutNguoidungInput | ThongbaoUpdateWithWhereUniqueWithoutNguoidungInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutNguoidungInput | ThongbaoUpdateManyWithWhereWithoutNguoidungInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput = {
    create?: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput> | ThongbaoCreateWithoutNguoitaoInput[] | ThongbaoUncheckedCreateWithoutNguoitaoInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutNguoitaoInput | ThongbaoCreateOrConnectWithoutNguoitaoInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutNguoitaoInput | ThongbaoUpsertWithWhereUniqueWithoutNguoitaoInput[]
    createMany?: ThongbaoCreateManyNguoitaoInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutNguoitaoInput | ThongbaoUpdateWithWhereUniqueWithoutNguoitaoInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutNguoitaoInput | ThongbaoUpdateManyWithWhereWithoutNguoitaoInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput = {
    create?: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput> | TinNhanCreateWithoutNguoiGuiInput[] | TinNhanUncheckedCreateWithoutNguoiGuiInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutNguoiGuiInput | TinNhanCreateOrConnectWithoutNguoiGuiInput[]
    upsert?: TinNhanUpsertWithWhereUniqueWithoutNguoiGuiInput | TinNhanUpsertWithWhereUniqueWithoutNguoiGuiInput[]
    createMany?: TinNhanCreateManyNguoiGuiInputEnvelope
    set?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    disconnect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    delete?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    update?: TinNhanUpdateWithWhereUniqueWithoutNguoiGuiInput | TinNhanUpdateWithWhereUniqueWithoutNguoiGuiInput[]
    updateMany?: TinNhanUpdateManyWithWhereWithoutNguoiGuiInput | TinNhanUpdateManyWithWhereWithoutNguoiGuiInput[]
    deleteMany?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
  }

  export type YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput = {
    create?: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput> | YeuthichCreateWithoutNguoidungInput[] | YeuthichUncheckedCreateWithoutNguoidungInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutNguoidungInput | YeuthichCreateOrConnectWithoutNguoidungInput[]
    upsert?: YeuthichUpsertWithWhereUniqueWithoutNguoidungInput | YeuthichUpsertWithWhereUniqueWithoutNguoidungInput[]
    createMany?: YeuthichCreateManyNguoidungInputEnvelope
    set?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    disconnect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    delete?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    update?: YeuthichUpdateWithWhereUniqueWithoutNguoidungInput | YeuthichUpdateWithWhereUniqueWithoutNguoidungInput[]
    updateMany?: YeuthichUpdateManyWithWhereWithoutNguoidungInput | YeuthichUpdateManyWithWhereWithoutNguoidungInput[]
    deleteMany?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
  }

  export type BaivietCreateNestedOneWithoutBinhluanInput = {
    create?: XOR<BaivietCreateWithoutBinhluanInput, BaivietUncheckedCreateWithoutBinhluanInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutBinhluanInput
    connect?: BaivietWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBinhluanInput = {
    create?: XOR<UserCreateWithoutBinhluanInput, UserUncheckedCreateWithoutBinhluanInput>
    connectOrCreate?: UserCreateOrConnectWithoutBinhluanInput
    connect?: UserWhereUniqueInput
  }

  export type ThongbaoCreateNestedManyWithoutBinhluanInput = {
    create?: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput> | ThongbaoCreateWithoutBinhluanInput[] | ThongbaoUncheckedCreateWithoutBinhluanInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBinhluanInput | ThongbaoCreateOrConnectWithoutBinhluanInput[]
    createMany?: ThongbaoCreateManyBinhluanInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type ThongbaoUncheckedCreateNestedManyWithoutBinhluanInput = {
    create?: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput> | ThongbaoCreateWithoutBinhluanInput[] | ThongbaoUncheckedCreateWithoutBinhluanInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBinhluanInput | ThongbaoCreateOrConnectWithoutBinhluanInput[]
    createMany?: ThongbaoCreateManyBinhluanInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type BaivietUpdateOneRequiredWithoutBinhluanNestedInput = {
    create?: XOR<BaivietCreateWithoutBinhluanInput, BaivietUncheckedCreateWithoutBinhluanInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutBinhluanInput
    upsert?: BaivietUpsertWithoutBinhluanInput
    connect?: BaivietWhereUniqueInput
    update?: XOR<XOR<BaivietUpdateToOneWithWhereWithoutBinhluanInput, BaivietUpdateWithoutBinhluanInput>, BaivietUncheckedUpdateWithoutBinhluanInput>
  }

  export type UserUpdateOneRequiredWithoutBinhluanNestedInput = {
    create?: XOR<UserCreateWithoutBinhluanInput, UserUncheckedCreateWithoutBinhluanInput>
    connectOrCreate?: UserCreateOrConnectWithoutBinhluanInput
    upsert?: UserUpsertWithoutBinhluanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBinhluanInput, UserUpdateWithoutBinhluanInput>, UserUncheckedUpdateWithoutBinhluanInput>
  }

  export type ThongbaoUpdateManyWithoutBinhluanNestedInput = {
    create?: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput> | ThongbaoCreateWithoutBinhluanInput[] | ThongbaoUncheckedCreateWithoutBinhluanInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBinhluanInput | ThongbaoCreateOrConnectWithoutBinhluanInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutBinhluanInput | ThongbaoUpsertWithWhereUniqueWithoutBinhluanInput[]
    createMany?: ThongbaoCreateManyBinhluanInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutBinhluanInput | ThongbaoUpdateWithWhereUniqueWithoutBinhluanInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutBinhluanInput | ThongbaoUpdateManyWithWhereWithoutBinhluanInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type ThongbaoUncheckedUpdateManyWithoutBinhluanNestedInput = {
    create?: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput> | ThongbaoCreateWithoutBinhluanInput[] | ThongbaoUncheckedCreateWithoutBinhluanInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBinhluanInput | ThongbaoCreateOrConnectWithoutBinhluanInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutBinhluanInput | ThongbaoUpsertWithWhereUniqueWithoutBinhluanInput[]
    createMany?: ThongbaoCreateManyBinhluanInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutBinhluanInput | ThongbaoUpdateWithWhereUniqueWithoutBinhluanInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutBinhluanInput | ThongbaoUpdateManyWithWhereWithoutBinhluanInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDangtheodoiInput = {
    create?: XOR<UserCreateWithoutDangtheodoiInput, UserUncheckedCreateWithoutDangtheodoiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDangtheodoiInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNguoitheodoiInput = {
    create?: XOR<UserCreateWithoutNguoitheodoiInput, UserUncheckedCreateWithoutNguoitheodoiInput>
    connectOrCreate?: UserCreateOrConnectWithoutNguoitheodoiInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDangtheodoiNestedInput = {
    create?: XOR<UserCreateWithoutDangtheodoiInput, UserUncheckedCreateWithoutDangtheodoiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDangtheodoiInput
    upsert?: UserUpsertWithoutDangtheodoiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDangtheodoiInput, UserUpdateWithoutDangtheodoiInput>, UserUncheckedUpdateWithoutDangtheodoiInput>
  }

  export type UserUpdateOneRequiredWithoutNguoitheodoiNestedInput = {
    create?: XOR<UserCreateWithoutNguoitheodoiInput, UserUncheckedCreateWithoutNguoitheodoiInput>
    connectOrCreate?: UserCreateOrConnectWithoutNguoitheodoiInput
    upsert?: UserUpsertWithoutNguoitheodoiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNguoitheodoiInput, UserUpdateWithoutNguoitheodoiInput>, UserUncheckedUpdateWithoutNguoitheodoiInput>
  }

  export type ChudeCreateNestedOneWithoutBaivietInput = {
    create?: XOR<ChudeCreateWithoutBaivietInput, ChudeUncheckedCreateWithoutBaivietInput>
    connectOrCreate?: ChudeCreateOrConnectWithoutBaivietInput
    connect?: ChudeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBaivietInput = {
    create?: XOR<UserCreateWithoutBaivietInput, UserUncheckedCreateWithoutBaivietInput>
    connectOrCreate?: UserCreateOrConnectWithoutBaivietInput
    connect?: UserWhereUniqueInput
  }

  export type BinhluanCreateNestedManyWithoutBaivietInput = {
    create?: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput> | BinhluanCreateWithoutBaivietInput[] | BinhluanUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutBaivietInput | BinhluanCreateOrConnectWithoutBaivietInput[]
    createMany?: BinhluanCreateManyBaivietInputEnvelope
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
  }

  export type ThongbaoCreateNestedManyWithoutBaivietInput = {
    create?: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput> | ThongbaoCreateWithoutBaivietInput[] | ThongbaoUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBaivietInput | ThongbaoCreateOrConnectWithoutBaivietInput[]
    createMany?: ThongbaoCreateManyBaivietInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type YeuthichCreateNestedManyWithoutBaivietInput = {
    create?: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput> | YeuthichCreateWithoutBaivietInput[] | YeuthichUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutBaivietInput | YeuthichCreateOrConnectWithoutBaivietInput[]
    createMany?: YeuthichCreateManyBaivietInputEnvelope
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
  }

  export type BinhluanUncheckedCreateNestedManyWithoutBaivietInput = {
    create?: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput> | BinhluanCreateWithoutBaivietInput[] | BinhluanUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutBaivietInput | BinhluanCreateOrConnectWithoutBaivietInput[]
    createMany?: BinhluanCreateManyBaivietInputEnvelope
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
  }

  export type ThongbaoUncheckedCreateNestedManyWithoutBaivietInput = {
    create?: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput> | ThongbaoCreateWithoutBaivietInput[] | ThongbaoUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBaivietInput | ThongbaoCreateOrConnectWithoutBaivietInput[]
    createMany?: ThongbaoCreateManyBaivietInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type YeuthichUncheckedCreateNestedManyWithoutBaivietInput = {
    create?: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput> | YeuthichCreateWithoutBaivietInput[] | YeuthichUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutBaivietInput | YeuthichCreateOrConnectWithoutBaivietInput[]
    createMany?: YeuthichCreateManyBaivietInputEnvelope
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
  }

  export type ChudeUpdateOneRequiredWithoutBaivietNestedInput = {
    create?: XOR<ChudeCreateWithoutBaivietInput, ChudeUncheckedCreateWithoutBaivietInput>
    connectOrCreate?: ChudeCreateOrConnectWithoutBaivietInput
    upsert?: ChudeUpsertWithoutBaivietInput
    connect?: ChudeWhereUniqueInput
    update?: XOR<XOR<ChudeUpdateToOneWithWhereWithoutBaivietInput, ChudeUpdateWithoutBaivietInput>, ChudeUncheckedUpdateWithoutBaivietInput>
  }

  export type UserUpdateOneRequiredWithoutBaivietNestedInput = {
    create?: XOR<UserCreateWithoutBaivietInput, UserUncheckedCreateWithoutBaivietInput>
    connectOrCreate?: UserCreateOrConnectWithoutBaivietInput
    upsert?: UserUpsertWithoutBaivietInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBaivietInput, UserUpdateWithoutBaivietInput>, UserUncheckedUpdateWithoutBaivietInput>
  }

  export type BinhluanUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput> | BinhluanCreateWithoutBaivietInput[] | BinhluanUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutBaivietInput | BinhluanCreateOrConnectWithoutBaivietInput[]
    upsert?: BinhluanUpsertWithWhereUniqueWithoutBaivietInput | BinhluanUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: BinhluanCreateManyBaivietInputEnvelope
    set?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    disconnect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    delete?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    update?: BinhluanUpdateWithWhereUniqueWithoutBaivietInput | BinhluanUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: BinhluanUpdateManyWithWhereWithoutBaivietInput | BinhluanUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
  }

  export type ThongbaoUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput> | ThongbaoCreateWithoutBaivietInput[] | ThongbaoUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBaivietInput | ThongbaoCreateOrConnectWithoutBaivietInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutBaivietInput | ThongbaoUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: ThongbaoCreateManyBaivietInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutBaivietInput | ThongbaoUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutBaivietInput | ThongbaoUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type YeuthichUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput> | YeuthichCreateWithoutBaivietInput[] | YeuthichUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutBaivietInput | YeuthichCreateOrConnectWithoutBaivietInput[]
    upsert?: YeuthichUpsertWithWhereUniqueWithoutBaivietInput | YeuthichUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: YeuthichCreateManyBaivietInputEnvelope
    set?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    disconnect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    delete?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    update?: YeuthichUpdateWithWhereUniqueWithoutBaivietInput | YeuthichUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: YeuthichUpdateManyWithWhereWithoutBaivietInput | YeuthichUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
  }

  export type BinhluanUncheckedUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput> | BinhluanCreateWithoutBaivietInput[] | BinhluanUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: BinhluanCreateOrConnectWithoutBaivietInput | BinhluanCreateOrConnectWithoutBaivietInput[]
    upsert?: BinhluanUpsertWithWhereUniqueWithoutBaivietInput | BinhluanUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: BinhluanCreateManyBaivietInputEnvelope
    set?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    disconnect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    delete?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    connect?: BinhluanWhereUniqueInput | BinhluanWhereUniqueInput[]
    update?: BinhluanUpdateWithWhereUniqueWithoutBaivietInput | BinhluanUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: BinhluanUpdateManyWithWhereWithoutBaivietInput | BinhluanUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
  }

  export type ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput> | ThongbaoCreateWithoutBaivietInput[] | ThongbaoUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutBaivietInput | ThongbaoCreateOrConnectWithoutBaivietInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutBaivietInput | ThongbaoUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: ThongbaoCreateManyBaivietInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutBaivietInput | ThongbaoUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutBaivietInput | ThongbaoUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type YeuthichUncheckedUpdateManyWithoutBaivietNestedInput = {
    create?: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput> | YeuthichCreateWithoutBaivietInput[] | YeuthichUncheckedCreateWithoutBaivietInput[]
    connectOrCreate?: YeuthichCreateOrConnectWithoutBaivietInput | YeuthichCreateOrConnectWithoutBaivietInput[]
    upsert?: YeuthichUpsertWithWhereUniqueWithoutBaivietInput | YeuthichUpsertWithWhereUniqueWithoutBaivietInput[]
    createMany?: YeuthichCreateManyBaivietInputEnvelope
    set?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    disconnect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    delete?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    connect?: YeuthichWhereUniqueInput | YeuthichWhereUniqueInput[]
    update?: YeuthichUpdateWithWhereUniqueWithoutBaivietInput | YeuthichUpdateWithWhereUniqueWithoutBaivietInput[]
    updateMany?: YeuthichUpdateManyWithWhereWithoutBaivietInput | YeuthichUpdateManyWithWhereWithoutBaivietInput[]
    deleteMany?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
  }

  export type ThongbaoCreateNestedManyWithoutYeuthichInput = {
    create?: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput> | ThongbaoCreateWithoutYeuthichInput[] | ThongbaoUncheckedCreateWithoutYeuthichInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutYeuthichInput | ThongbaoCreateOrConnectWithoutYeuthichInput[]
    createMany?: ThongbaoCreateManyYeuthichInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type BaivietCreateNestedOneWithoutYeuthichInput = {
    create?: XOR<BaivietCreateWithoutYeuthichInput, BaivietUncheckedCreateWithoutYeuthichInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutYeuthichInput
    connect?: BaivietWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutYeuthichInput = {
    create?: XOR<UserCreateWithoutYeuthichInput, UserUncheckedCreateWithoutYeuthichInput>
    connectOrCreate?: UserCreateOrConnectWithoutYeuthichInput
    connect?: UserWhereUniqueInput
  }

  export type ThongbaoUncheckedCreateNestedManyWithoutYeuthichInput = {
    create?: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput> | ThongbaoCreateWithoutYeuthichInput[] | ThongbaoUncheckedCreateWithoutYeuthichInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutYeuthichInput | ThongbaoCreateOrConnectWithoutYeuthichInput[]
    createMany?: ThongbaoCreateManyYeuthichInputEnvelope
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
  }

  export type ThongbaoUpdateManyWithoutYeuthichNestedInput = {
    create?: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput> | ThongbaoCreateWithoutYeuthichInput[] | ThongbaoUncheckedCreateWithoutYeuthichInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutYeuthichInput | ThongbaoCreateOrConnectWithoutYeuthichInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutYeuthichInput | ThongbaoUpsertWithWhereUniqueWithoutYeuthichInput[]
    createMany?: ThongbaoCreateManyYeuthichInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutYeuthichInput | ThongbaoUpdateWithWhereUniqueWithoutYeuthichInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutYeuthichInput | ThongbaoUpdateManyWithWhereWithoutYeuthichInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type BaivietUpdateOneRequiredWithoutYeuthichNestedInput = {
    create?: XOR<BaivietCreateWithoutYeuthichInput, BaivietUncheckedCreateWithoutYeuthichInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutYeuthichInput
    upsert?: BaivietUpsertWithoutYeuthichInput
    connect?: BaivietWhereUniqueInput
    update?: XOR<XOR<BaivietUpdateToOneWithWhereWithoutYeuthichInput, BaivietUpdateWithoutYeuthichInput>, BaivietUncheckedUpdateWithoutYeuthichInput>
  }

  export type UserUpdateOneRequiredWithoutYeuthichNestedInput = {
    create?: XOR<UserCreateWithoutYeuthichInput, UserUncheckedCreateWithoutYeuthichInput>
    connectOrCreate?: UserCreateOrConnectWithoutYeuthichInput
    upsert?: UserUpsertWithoutYeuthichInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutYeuthichInput, UserUpdateWithoutYeuthichInput>, UserUncheckedUpdateWithoutYeuthichInput>
  }

  export type ThongbaoUncheckedUpdateManyWithoutYeuthichNestedInput = {
    create?: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput> | ThongbaoCreateWithoutYeuthichInput[] | ThongbaoUncheckedCreateWithoutYeuthichInput[]
    connectOrCreate?: ThongbaoCreateOrConnectWithoutYeuthichInput | ThongbaoCreateOrConnectWithoutYeuthichInput[]
    upsert?: ThongbaoUpsertWithWhereUniqueWithoutYeuthichInput | ThongbaoUpsertWithWhereUniqueWithoutYeuthichInput[]
    createMany?: ThongbaoCreateManyYeuthichInputEnvelope
    set?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    disconnect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    delete?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    connect?: ThongbaoWhereUniqueInput | ThongbaoWhereUniqueInput[]
    update?: ThongbaoUpdateWithWhereUniqueWithoutYeuthichInput | ThongbaoUpdateWithWhereUniqueWithoutYeuthichInput[]
    updateMany?: ThongbaoUpdateManyWithWhereWithoutYeuthichInput | ThongbaoUpdateManyWithWhereWithoutYeuthichInput[]
    deleteMany?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
  }

  export type BaivietCreateNestedOneWithoutThongbaoInput = {
    create?: XOR<BaivietCreateWithoutThongbaoInput, BaivietUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutThongbaoInput
    connect?: BaivietWhereUniqueInput
  }

  export type BinhluanCreateNestedOneWithoutThongbaoInput = {
    create?: XOR<BinhluanCreateWithoutThongbaoInput, BinhluanUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: BinhluanCreateOrConnectWithoutThongbaoInput
    connect?: BinhluanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThongbaoInput = {
    create?: XOR<UserCreateWithoutThongbaoInput, UserUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutThongbaoInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThongbaoDaTaoInput = {
    create?: XOR<UserCreateWithoutThongbaoDaTaoInput, UserUncheckedCreateWithoutThongbaoDaTaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutThongbaoDaTaoInput
    connect?: UserWhereUniqueInput
  }

  export type YeuthichCreateNestedOneWithoutThongbaoInput = {
    create?: XOR<YeuthichCreateWithoutThongbaoInput, YeuthichUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: YeuthichCreateOrConnectWithoutThongbaoInput
    connect?: YeuthichWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BaivietUpdateOneWithoutThongbaoNestedInput = {
    create?: XOR<BaivietCreateWithoutThongbaoInput, BaivietUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: BaivietCreateOrConnectWithoutThongbaoInput
    upsert?: BaivietUpsertWithoutThongbaoInput
    disconnect?: BaivietWhereInput | boolean
    delete?: BaivietWhereInput | boolean
    connect?: BaivietWhereUniqueInput
    update?: XOR<XOR<BaivietUpdateToOneWithWhereWithoutThongbaoInput, BaivietUpdateWithoutThongbaoInput>, BaivietUncheckedUpdateWithoutThongbaoInput>
  }

  export type BinhluanUpdateOneWithoutThongbaoNestedInput = {
    create?: XOR<BinhluanCreateWithoutThongbaoInput, BinhluanUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: BinhluanCreateOrConnectWithoutThongbaoInput
    upsert?: BinhluanUpsertWithoutThongbaoInput
    disconnect?: BinhluanWhereInput | boolean
    delete?: BinhluanWhereInput | boolean
    connect?: BinhluanWhereUniqueInput
    update?: XOR<XOR<BinhluanUpdateToOneWithWhereWithoutThongbaoInput, BinhluanUpdateWithoutThongbaoInput>, BinhluanUncheckedUpdateWithoutThongbaoInput>
  }

  export type UserUpdateOneRequiredWithoutThongbaoNestedInput = {
    create?: XOR<UserCreateWithoutThongbaoInput, UserUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutThongbaoInput
    upsert?: UserUpsertWithoutThongbaoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThongbaoInput, UserUpdateWithoutThongbaoInput>, UserUncheckedUpdateWithoutThongbaoInput>
  }

  export type UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput = {
    create?: XOR<UserCreateWithoutThongbaoDaTaoInput, UserUncheckedCreateWithoutThongbaoDaTaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutThongbaoDaTaoInput
    upsert?: UserUpsertWithoutThongbaoDaTaoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThongbaoDaTaoInput, UserUpdateWithoutThongbaoDaTaoInput>, UserUncheckedUpdateWithoutThongbaoDaTaoInput>
  }

  export type YeuthichUpdateOneWithoutThongbaoNestedInput = {
    create?: XOR<YeuthichCreateWithoutThongbaoInput, YeuthichUncheckedCreateWithoutThongbaoInput>
    connectOrCreate?: YeuthichCreateOrConnectWithoutThongbaoInput
    upsert?: YeuthichUpsertWithoutThongbaoInput
    disconnect?: YeuthichWhereInput | boolean
    delete?: YeuthichWhereInput | boolean
    connect?: YeuthichWhereUniqueInput
    update?: XOR<XOR<YeuthichUpdateToOneWithWhereWithoutThongbaoInput, YeuthichUpdateWithoutThongbaoInput>, YeuthichUncheckedUpdateWithoutThongbaoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaivietCreateNestedManyWithoutChudeInput = {
    create?: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput> | BaivietCreateWithoutChudeInput[] | BaivietUncheckedCreateWithoutChudeInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutChudeInput | BaivietCreateOrConnectWithoutChudeInput[]
    createMany?: BaivietCreateManyChudeInputEnvelope
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
  }

  export type BaivietUncheckedCreateNestedManyWithoutChudeInput = {
    create?: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput> | BaivietCreateWithoutChudeInput[] | BaivietUncheckedCreateWithoutChudeInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutChudeInput | BaivietCreateOrConnectWithoutChudeInput[]
    createMany?: BaivietCreateManyChudeInputEnvelope
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
  }

  export type BaivietUpdateManyWithoutChudeNestedInput = {
    create?: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput> | BaivietCreateWithoutChudeInput[] | BaivietUncheckedCreateWithoutChudeInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutChudeInput | BaivietCreateOrConnectWithoutChudeInput[]
    upsert?: BaivietUpsertWithWhereUniqueWithoutChudeInput | BaivietUpsertWithWhereUniqueWithoutChudeInput[]
    createMany?: BaivietCreateManyChudeInputEnvelope
    set?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    disconnect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    delete?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    update?: BaivietUpdateWithWhereUniqueWithoutChudeInput | BaivietUpdateWithWhereUniqueWithoutChudeInput[]
    updateMany?: BaivietUpdateManyWithWhereWithoutChudeInput | BaivietUpdateManyWithWhereWithoutChudeInput[]
    deleteMany?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
  }

  export type BaivietUncheckedUpdateManyWithoutChudeNestedInput = {
    create?: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput> | BaivietCreateWithoutChudeInput[] | BaivietUncheckedCreateWithoutChudeInput[]
    connectOrCreate?: BaivietCreateOrConnectWithoutChudeInput | BaivietCreateOrConnectWithoutChudeInput[]
    upsert?: BaivietUpsertWithWhereUniqueWithoutChudeInput | BaivietUpsertWithWhereUniqueWithoutChudeInput[]
    createMany?: BaivietCreateManyChudeInputEnvelope
    set?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    disconnect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    delete?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    connect?: BaivietWhereUniqueInput | BaivietWhereUniqueInput[]
    update?: BaivietUpdateWithWhereUniqueWithoutChudeInput | BaivietUpdateWithWhereUniqueWithoutChudeInput[]
    updateMany?: BaivietUpdateManyWithWhereWithoutChudeInput | BaivietUpdateManyWithWhereWithoutChudeInput[]
    deleteMany?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
  }

  export type CuocTroChuyenThanhVienCreateNestedManyWithoutCuocTroChuyenInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput> | CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyCuocTroChuyenInputEnvelope
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
  }

  export type TinNhanCreateNestedManyWithoutCuocTroChuyenInput = {
    create?: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput> | TinNhanCreateWithoutCuocTroChuyenInput[] | TinNhanUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutCuocTroChuyenInput | TinNhanCreateOrConnectWithoutCuocTroChuyenInput[]
    createMany?: TinNhanCreateManyCuocTroChuyenInputEnvelope
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
  }

  export type CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutCuocTroChuyenInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput> | CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyCuocTroChuyenInputEnvelope
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
  }

  export type TinNhanUncheckedCreateNestedManyWithoutCuocTroChuyenInput = {
    create?: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput> | TinNhanCreateWithoutCuocTroChuyenInput[] | TinNhanUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutCuocTroChuyenInput | TinNhanCreateOrConnectWithoutCuocTroChuyenInput[]
    createMany?: TinNhanCreateManyCuocTroChuyenInputEnvelope
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
  }

  export type CuocTroChuyenThanhVienUpdateManyWithoutCuocTroChuyenNestedInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput> | CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput[]
    upsert?: CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutCuocTroChuyenInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyCuocTroChuyenInputEnvelope
    set?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    disconnect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    delete?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    update?: CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutCuocTroChuyenInput[]
    updateMany?: CuocTroChuyenThanhVienUpdateManyWithWhereWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpdateManyWithWhereWithoutCuocTroChuyenInput[]
    deleteMany?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
  }

  export type TinNhanUpdateManyWithoutCuocTroChuyenNestedInput = {
    create?: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput> | TinNhanCreateWithoutCuocTroChuyenInput[] | TinNhanUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutCuocTroChuyenInput | TinNhanCreateOrConnectWithoutCuocTroChuyenInput[]
    upsert?: TinNhanUpsertWithWhereUniqueWithoutCuocTroChuyenInput | TinNhanUpsertWithWhereUniqueWithoutCuocTroChuyenInput[]
    createMany?: TinNhanCreateManyCuocTroChuyenInputEnvelope
    set?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    disconnect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    delete?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    update?: TinNhanUpdateWithWhereUniqueWithoutCuocTroChuyenInput | TinNhanUpdateWithWhereUniqueWithoutCuocTroChuyenInput[]
    updateMany?: TinNhanUpdateManyWithWhereWithoutCuocTroChuyenInput | TinNhanUpdateManyWithWhereWithoutCuocTroChuyenInput[]
    deleteMany?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateManyWithoutCuocTroChuyenNestedInput = {
    create?: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput> | CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput[] | CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput[]
    upsert?: CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutCuocTroChuyenInput[]
    createMany?: CuocTroChuyenThanhVienCreateManyCuocTroChuyenInputEnvelope
    set?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    disconnect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    delete?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    connect?: CuocTroChuyenThanhVienWhereUniqueInput | CuocTroChuyenThanhVienWhereUniqueInput[]
    update?: CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutCuocTroChuyenInput[]
    updateMany?: CuocTroChuyenThanhVienUpdateManyWithWhereWithoutCuocTroChuyenInput | CuocTroChuyenThanhVienUpdateManyWithWhereWithoutCuocTroChuyenInput[]
    deleteMany?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
  }

  export type TinNhanUncheckedUpdateManyWithoutCuocTroChuyenNestedInput = {
    create?: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput> | TinNhanCreateWithoutCuocTroChuyenInput[] | TinNhanUncheckedCreateWithoutCuocTroChuyenInput[]
    connectOrCreate?: TinNhanCreateOrConnectWithoutCuocTroChuyenInput | TinNhanCreateOrConnectWithoutCuocTroChuyenInput[]
    upsert?: TinNhanUpsertWithWhereUniqueWithoutCuocTroChuyenInput | TinNhanUpsertWithWhereUniqueWithoutCuocTroChuyenInput[]
    createMany?: TinNhanCreateManyCuocTroChuyenInputEnvelope
    set?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    disconnect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    delete?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    connect?: TinNhanWhereUniqueInput | TinNhanWhereUniqueInput[]
    update?: TinNhanUpdateWithWhereUniqueWithoutCuocTroChuyenInput | TinNhanUpdateWithWhereUniqueWithoutCuocTroChuyenInput[]
    updateMany?: TinNhanUpdateManyWithWhereWithoutCuocTroChuyenInput | TinNhanUpdateManyWithWhereWithoutCuocTroChuyenInput[]
    deleteMany?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
  }

  export type CuocTroChuyenCreateNestedOneWithoutThanhVienInput = {
    create?: XOR<CuocTroChuyenCreateWithoutThanhVienInput, CuocTroChuyenUncheckedCreateWithoutThanhVienInput>
    connectOrCreate?: CuocTroChuyenCreateOrConnectWithoutThanhVienInput
    connect?: CuocTroChuyenWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThamGiaCuocTroChuyenInput = {
    create?: XOR<UserCreateWithoutThamGiaCuocTroChuyenInput, UserUncheckedCreateWithoutThamGiaCuocTroChuyenInput>
    connectOrCreate?: UserCreateOrConnectWithoutThamGiaCuocTroChuyenInput
    connect?: UserWhereUniqueInput
  }

  export type CuocTroChuyenUpdateOneRequiredWithoutThanhVienNestedInput = {
    create?: XOR<CuocTroChuyenCreateWithoutThanhVienInput, CuocTroChuyenUncheckedCreateWithoutThanhVienInput>
    connectOrCreate?: CuocTroChuyenCreateOrConnectWithoutThanhVienInput
    upsert?: CuocTroChuyenUpsertWithoutThanhVienInput
    connect?: CuocTroChuyenWhereUniqueInput
    update?: XOR<XOR<CuocTroChuyenUpdateToOneWithWhereWithoutThanhVienInput, CuocTroChuyenUpdateWithoutThanhVienInput>, CuocTroChuyenUncheckedUpdateWithoutThanhVienInput>
  }

  export type UserUpdateOneRequiredWithoutThamGiaCuocTroChuyenNestedInput = {
    create?: XOR<UserCreateWithoutThamGiaCuocTroChuyenInput, UserUncheckedCreateWithoutThamGiaCuocTroChuyenInput>
    connectOrCreate?: UserCreateOrConnectWithoutThamGiaCuocTroChuyenInput
    upsert?: UserUpsertWithoutThamGiaCuocTroChuyenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThamGiaCuocTroChuyenInput, UserUpdateWithoutThamGiaCuocTroChuyenInput>, UserUncheckedUpdateWithoutThamGiaCuocTroChuyenInput>
  }

  export type CuocTroChuyenCreateNestedOneWithoutTinNhanInput = {
    create?: XOR<CuocTroChuyenCreateWithoutTinNhanInput, CuocTroChuyenUncheckedCreateWithoutTinNhanInput>
    connectOrCreate?: CuocTroChuyenCreateOrConnectWithoutTinNhanInput
    connect?: CuocTroChuyenWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTinNhanGuiInput = {
    create?: XOR<UserCreateWithoutTinNhanGuiInput, UserUncheckedCreateWithoutTinNhanGuiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTinNhanGuiInput
    connect?: UserWhereUniqueInput
  }

  export type CuocTroChuyenUpdateOneRequiredWithoutTinNhanNestedInput = {
    create?: XOR<CuocTroChuyenCreateWithoutTinNhanInput, CuocTroChuyenUncheckedCreateWithoutTinNhanInput>
    connectOrCreate?: CuocTroChuyenCreateOrConnectWithoutTinNhanInput
    upsert?: CuocTroChuyenUpsertWithoutTinNhanInput
    connect?: CuocTroChuyenWhereUniqueInput
    update?: XOR<XOR<CuocTroChuyenUpdateToOneWithWhereWithoutTinNhanInput, CuocTroChuyenUpdateWithoutTinNhanInput>, CuocTroChuyenUncheckedUpdateWithoutTinNhanInput>
  }

  export type UserUpdateOneRequiredWithoutTinNhanGuiNestedInput = {
    create?: XOR<UserCreateWithoutTinNhanGuiInput, UserUncheckedCreateWithoutTinNhanGuiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTinNhanGuiInput
    upsert?: UserUpsertWithoutTinNhanGuiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTinNhanGuiInput, UserUpdateWithoutTinNhanGuiInput>, UserUncheckedUpdateWithoutTinNhanGuiInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BaivietCreateWithoutTacgiaInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chude: ChudeCreateNestedOneWithoutBaivietInput
    binhluan?: BinhluanCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateWithoutTacgiaInput = {
    id?: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietCreateOrConnectWithoutTacgiaInput = {
    where: BaivietWhereUniqueInput
    create: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput>
  }

  export type BaivietCreateManyTacgiaInputEnvelope = {
    data: BaivietCreateManyTacgiaInput | BaivietCreateManyTacgiaInput[]
  }

  export type BinhluanCreateWithoutTacgiaInput = {
    noidung: string
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet: BaivietCreateNestedOneWithoutBinhluanInput
    thongbao?: ThongbaoCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanUncheckedCreateWithoutTacgiaInput = {
    id?: number
    noidung: string
    baivietID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanCreateOrConnectWithoutTacgiaInput = {
    where: BinhluanWhereUniqueInput
    create: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput>
  }

  export type BinhluanCreateManyTacgiaInputEnvelope = {
    data: BinhluanCreateManyTacgiaInput | BinhluanCreateManyTacgiaInput[]
  }

  export type CuocTroChuyenThanhVienCreateWithoutNguoiDungInput = {
    thamGiaLuc?: Date | string
    cuocTroChuyen: CuocTroChuyenCreateNestedOneWithoutThanhVienInput
  }

  export type CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    cuocTroChuyenId: number
    thamGiaLuc?: Date | string
  }

  export type CuocTroChuyenThanhVienCreateOrConnectWithoutNguoiDungInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    create: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput>
  }

  export type CuocTroChuyenThanhVienCreateManyNguoiDungInputEnvelope = {
    data: CuocTroChuyenThanhVienCreateManyNguoiDungInput | CuocTroChuyenThanhVienCreateManyNguoiDungInput[]
  }

  export type TheodoiCreateWithoutNguoiTheoDoiInput = {
    ngaytao?: Date | string
    nguoiDuocTheoDoi: UserCreateNestedOneWithoutNguoitheodoiInput
  }

  export type TheodoiUncheckedCreateWithoutNguoiTheoDoiInput = {
    id?: number
    nguoitheodoiID: number
    ngaytao?: Date | string
  }

  export type TheodoiCreateOrConnectWithoutNguoiTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    create: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput>
  }

  export type TheodoiCreateManyNguoiTheoDoiInputEnvelope = {
    data: TheodoiCreateManyNguoiTheoDoiInput | TheodoiCreateManyNguoiTheoDoiInput[]
  }

  export type TheodoiCreateWithoutNguoiDuocTheoDoiInput = {
    ngaytao?: Date | string
    nguoiTheoDoi: UserCreateNestedOneWithoutDangtheodoiInput
  }

  export type TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput = {
    id?: number
    nguoidangtheodoiID: number
    ngaytao?: Date | string
  }

  export type TheodoiCreateOrConnectWithoutNguoiDuocTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    create: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput>
  }

  export type TheodoiCreateManyNguoiDuocTheoDoiInputEnvelope = {
    data: TheodoiCreateManyNguoiDuocTheoDoiInput | TheodoiCreateManyNguoiDuocTheoDoiInput[]
  }

  export type ThongbaoCreateWithoutNguoidungInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    baiviet?: BaivietCreateNestedOneWithoutThongbaoInput
    binhluan?: BinhluanCreateNestedOneWithoutThongbaoInput
    nguoitao: UserCreateNestedOneWithoutThongbaoDaTaoInput
    yeuthich?: YeuthichCreateNestedOneWithoutThongbaoInput
  }

  export type ThongbaoUncheckedCreateWithoutNguoidungInput = {
    id?: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateOrConnectWithoutNguoidungInput = {
    where: ThongbaoWhereUniqueInput
    create: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput>
  }

  export type ThongbaoCreateManyNguoidungInputEnvelope = {
    data: ThongbaoCreateManyNguoidungInput | ThongbaoCreateManyNguoidungInput[]
  }

  export type ThongbaoCreateWithoutNguoitaoInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    baiviet?: BaivietCreateNestedOneWithoutThongbaoInput
    binhluan?: BinhluanCreateNestedOneWithoutThongbaoInput
    nguoidung: UserCreateNestedOneWithoutThongbaoInput
    yeuthich?: YeuthichCreateNestedOneWithoutThongbaoInput
  }

  export type ThongbaoUncheckedCreateWithoutNguoitaoInput = {
    id?: number
    nguoidungID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateOrConnectWithoutNguoitaoInput = {
    where: ThongbaoWhereUniqueInput
    create: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput>
  }

  export type ThongbaoCreateManyNguoitaoInputEnvelope = {
    data: ThongbaoCreateManyNguoitaoInput | ThongbaoCreateManyNguoitaoInput[]
  }

  export type TinNhanCreateWithoutNguoiGuiInput = {
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
    cuocTroChuyen: CuocTroChuyenCreateNestedOneWithoutTinNhanInput
  }

  export type TinNhanUncheckedCreateWithoutNguoiGuiInput = {
    id?: number
    cuocTroChuyenId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type TinNhanCreateOrConnectWithoutNguoiGuiInput = {
    where: TinNhanWhereUniqueInput
    create: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput>
  }

  export type TinNhanCreateManyNguoiGuiInputEnvelope = {
    data: TinNhanCreateManyNguoiGuiInput | TinNhanCreateManyNguoiGuiInput[]
  }

  export type YeuthichCreateWithoutNguoidungInput = {
    ngaytao?: Date | string
    thongbao?: ThongbaoCreateNestedManyWithoutYeuthichInput
    baiviet: BaivietCreateNestedOneWithoutYeuthichInput
  }

  export type YeuthichUncheckedCreateWithoutNguoidungInput = {
    id?: number
    baivietID: number
    ngaytao?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutYeuthichInput
  }

  export type YeuthichCreateOrConnectWithoutNguoidungInput = {
    where: YeuthichWhereUniqueInput
    create: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput>
  }

  export type YeuthichCreateManyNguoidungInputEnvelope = {
    data: YeuthichCreateManyNguoidungInput | YeuthichCreateManyNguoidungInput[]
  }

  export type BaivietUpsertWithWhereUniqueWithoutTacgiaInput = {
    where: BaivietWhereUniqueInput
    update: XOR<BaivietUpdateWithoutTacgiaInput, BaivietUncheckedUpdateWithoutTacgiaInput>
    create: XOR<BaivietCreateWithoutTacgiaInput, BaivietUncheckedCreateWithoutTacgiaInput>
  }

  export type BaivietUpdateWithWhereUniqueWithoutTacgiaInput = {
    where: BaivietWhereUniqueInput
    data: XOR<BaivietUpdateWithoutTacgiaInput, BaivietUncheckedUpdateWithoutTacgiaInput>
  }

  export type BaivietUpdateManyWithWhereWithoutTacgiaInput = {
    where: BaivietScalarWhereInput
    data: XOR<BaivietUpdateManyMutationInput, BaivietUncheckedUpdateManyWithoutTacgiaInput>
  }

  export type BaivietScalarWhereInput = {
    AND?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
    OR?: BaivietScalarWhereInput[]
    NOT?: BaivietScalarWhereInput | BaivietScalarWhereInput[]
    id?: IntFilter<"Baiviet"> | number
    tacgiaID?: IntFilter<"Baiviet"> | number
    noidung?: StringNullableFilter<"Baiviet"> | string | null
    hinhanh?: StringNullableFilter<"Baiviet"> | string | null
    ngaytao?: DateTimeFilter<"Baiviet"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Baiviet"> | Date | string
    chudeID?: IntFilter<"Baiviet"> | number
  }

  export type BinhluanUpsertWithWhereUniqueWithoutTacgiaInput = {
    where: BinhluanWhereUniqueInput
    update: XOR<BinhluanUpdateWithoutTacgiaInput, BinhluanUncheckedUpdateWithoutTacgiaInput>
    create: XOR<BinhluanCreateWithoutTacgiaInput, BinhluanUncheckedCreateWithoutTacgiaInput>
  }

  export type BinhluanUpdateWithWhereUniqueWithoutTacgiaInput = {
    where: BinhluanWhereUniqueInput
    data: XOR<BinhluanUpdateWithoutTacgiaInput, BinhluanUncheckedUpdateWithoutTacgiaInput>
  }

  export type BinhluanUpdateManyWithWhereWithoutTacgiaInput = {
    where: BinhluanScalarWhereInput
    data: XOR<BinhluanUpdateManyMutationInput, BinhluanUncheckedUpdateManyWithoutTacgiaInput>
  }

  export type BinhluanScalarWhereInput = {
    AND?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
    OR?: BinhluanScalarWhereInput[]
    NOT?: BinhluanScalarWhereInput | BinhluanScalarWhereInput[]
    id?: IntFilter<"Binhluan"> | number
    noidung?: StringFilter<"Binhluan"> | string
    baivietID?: IntFilter<"Binhluan"> | number
    tacgiaID?: IntFilter<"Binhluan"> | number
    ngaytao?: DateTimeFilter<"Binhluan"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Binhluan"> | Date | string
  }

  export type CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    update: XOR<CuocTroChuyenThanhVienUpdateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<CuocTroChuyenThanhVienCreateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedCreateWithoutNguoiDungInput>
  }

  export type CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    data: XOR<CuocTroChuyenThanhVienUpdateWithoutNguoiDungInput, CuocTroChuyenThanhVienUncheckedUpdateWithoutNguoiDungInput>
  }

  export type CuocTroChuyenThanhVienUpdateManyWithWhereWithoutNguoiDungInput = {
    where: CuocTroChuyenThanhVienScalarWhereInput
    data: XOR<CuocTroChuyenThanhVienUpdateManyMutationInput, CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type CuocTroChuyenThanhVienScalarWhereInput = {
    AND?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
    OR?: CuocTroChuyenThanhVienScalarWhereInput[]
    NOT?: CuocTroChuyenThanhVienScalarWhereInput | CuocTroChuyenThanhVienScalarWhereInput[]
    id?: IntFilter<"CuocTroChuyenThanhVien"> | number
    nguoiDungId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    cuocTroChuyenId?: IntFilter<"CuocTroChuyenThanhVien"> | number
    thamGiaLuc?: DateTimeFilter<"CuocTroChuyenThanhVien"> | Date | string
  }

  export type TheodoiUpsertWithWhereUniqueWithoutNguoiTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    update: XOR<TheodoiUpdateWithoutNguoiTheoDoiInput, TheodoiUncheckedUpdateWithoutNguoiTheoDoiInput>
    create: XOR<TheodoiCreateWithoutNguoiTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiTheoDoiInput>
  }

  export type TheodoiUpdateWithWhereUniqueWithoutNguoiTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    data: XOR<TheodoiUpdateWithoutNguoiTheoDoiInput, TheodoiUncheckedUpdateWithoutNguoiTheoDoiInput>
  }

  export type TheodoiUpdateManyWithWhereWithoutNguoiTheoDoiInput = {
    where: TheodoiScalarWhereInput
    data: XOR<TheodoiUpdateManyMutationInput, TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiInput>
  }

  export type TheodoiScalarWhereInput = {
    AND?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
    OR?: TheodoiScalarWhereInput[]
    NOT?: TheodoiScalarWhereInput | TheodoiScalarWhereInput[]
    id?: IntFilter<"Theodoi"> | number
    nguoidangtheodoiID?: IntFilter<"Theodoi"> | number
    nguoitheodoiID?: IntFilter<"Theodoi"> | number
    ngaytao?: DateTimeFilter<"Theodoi"> | Date | string
  }

  export type TheodoiUpsertWithWhereUniqueWithoutNguoiDuocTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    update: XOR<TheodoiUpdateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedUpdateWithoutNguoiDuocTheoDoiInput>
    create: XOR<TheodoiCreateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedCreateWithoutNguoiDuocTheoDoiInput>
  }

  export type TheodoiUpdateWithWhereUniqueWithoutNguoiDuocTheoDoiInput = {
    where: TheodoiWhereUniqueInput
    data: XOR<TheodoiUpdateWithoutNguoiDuocTheoDoiInput, TheodoiUncheckedUpdateWithoutNguoiDuocTheoDoiInput>
  }

  export type TheodoiUpdateManyWithWhereWithoutNguoiDuocTheoDoiInput = {
    where: TheodoiScalarWhereInput
    data: XOR<TheodoiUpdateManyMutationInput, TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiInput>
  }

  export type ThongbaoUpsertWithWhereUniqueWithoutNguoidungInput = {
    where: ThongbaoWhereUniqueInput
    update: XOR<ThongbaoUpdateWithoutNguoidungInput, ThongbaoUncheckedUpdateWithoutNguoidungInput>
    create: XOR<ThongbaoCreateWithoutNguoidungInput, ThongbaoUncheckedCreateWithoutNguoidungInput>
  }

  export type ThongbaoUpdateWithWhereUniqueWithoutNguoidungInput = {
    where: ThongbaoWhereUniqueInput
    data: XOR<ThongbaoUpdateWithoutNguoidungInput, ThongbaoUncheckedUpdateWithoutNguoidungInput>
  }

  export type ThongbaoUpdateManyWithWhereWithoutNguoidungInput = {
    where: ThongbaoScalarWhereInput
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyWithoutNguoidungInput>
  }

  export type ThongbaoScalarWhereInput = {
    AND?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
    OR?: ThongbaoScalarWhereInput[]
    NOT?: ThongbaoScalarWhereInput | ThongbaoScalarWhereInput[]
    id?: IntFilter<"Thongbao"> | number
    nguoidungID?: IntFilter<"Thongbao"> | number
    nguoitaoID?: IntFilter<"Thongbao"> | number
    noidung?: StringNullableFilter<"Thongbao"> | string | null
    baivietID?: IntNullableFilter<"Thongbao"> | number | null
    binhluanID?: IntNullableFilter<"Thongbao"> | number | null
    yeuthichID?: IntNullableFilter<"Thongbao"> | number | null
    loai?: StringNullableFilter<"Thongbao"> | string | null
    ngaytao?: DateTimeFilter<"Thongbao"> | Date | string
    ngaycapnhat?: DateTimeFilter<"Thongbao"> | Date | string
    daXem?: BoolFilter<"Thongbao"> | boolean
  }

  export type ThongbaoUpsertWithWhereUniqueWithoutNguoitaoInput = {
    where: ThongbaoWhereUniqueInput
    update: XOR<ThongbaoUpdateWithoutNguoitaoInput, ThongbaoUncheckedUpdateWithoutNguoitaoInput>
    create: XOR<ThongbaoCreateWithoutNguoitaoInput, ThongbaoUncheckedCreateWithoutNguoitaoInput>
  }

  export type ThongbaoUpdateWithWhereUniqueWithoutNguoitaoInput = {
    where: ThongbaoWhereUniqueInput
    data: XOR<ThongbaoUpdateWithoutNguoitaoInput, ThongbaoUncheckedUpdateWithoutNguoitaoInput>
  }

  export type ThongbaoUpdateManyWithWhereWithoutNguoitaoInput = {
    where: ThongbaoScalarWhereInput
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyWithoutNguoitaoInput>
  }

  export type TinNhanUpsertWithWhereUniqueWithoutNguoiGuiInput = {
    where: TinNhanWhereUniqueInput
    update: XOR<TinNhanUpdateWithoutNguoiGuiInput, TinNhanUncheckedUpdateWithoutNguoiGuiInput>
    create: XOR<TinNhanCreateWithoutNguoiGuiInput, TinNhanUncheckedCreateWithoutNguoiGuiInput>
  }

  export type TinNhanUpdateWithWhereUniqueWithoutNguoiGuiInput = {
    where: TinNhanWhereUniqueInput
    data: XOR<TinNhanUpdateWithoutNguoiGuiInput, TinNhanUncheckedUpdateWithoutNguoiGuiInput>
  }

  export type TinNhanUpdateManyWithWhereWithoutNguoiGuiInput = {
    where: TinNhanScalarWhereInput
    data: XOR<TinNhanUpdateManyMutationInput, TinNhanUncheckedUpdateManyWithoutNguoiGuiInput>
  }

  export type TinNhanScalarWhereInput = {
    AND?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
    OR?: TinNhanScalarWhereInput[]
    NOT?: TinNhanScalarWhereInput | TinNhanScalarWhereInput[]
    id?: IntFilter<"TinNhan"> | number
    cuocTroChuyenId?: IntFilter<"TinNhan"> | number
    nguoiGuiId?: IntFilter<"TinNhan"> | number
    noiDung?: StringFilter<"TinNhan"> | string
    guiLuc?: DateTimeFilter<"TinNhan"> | Date | string
    daDoc?: BoolFilter<"TinNhan"> | boolean
  }

  export type YeuthichUpsertWithWhereUniqueWithoutNguoidungInput = {
    where: YeuthichWhereUniqueInput
    update: XOR<YeuthichUpdateWithoutNguoidungInput, YeuthichUncheckedUpdateWithoutNguoidungInput>
    create: XOR<YeuthichCreateWithoutNguoidungInput, YeuthichUncheckedCreateWithoutNguoidungInput>
  }

  export type YeuthichUpdateWithWhereUniqueWithoutNguoidungInput = {
    where: YeuthichWhereUniqueInput
    data: XOR<YeuthichUpdateWithoutNguoidungInput, YeuthichUncheckedUpdateWithoutNguoidungInput>
  }

  export type YeuthichUpdateManyWithWhereWithoutNguoidungInput = {
    where: YeuthichScalarWhereInput
    data: XOR<YeuthichUpdateManyMutationInput, YeuthichUncheckedUpdateManyWithoutNguoidungInput>
  }

  export type YeuthichScalarWhereInput = {
    AND?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
    OR?: YeuthichScalarWhereInput[]
    NOT?: YeuthichScalarWhereInput | YeuthichScalarWhereInput[]
    id?: IntFilter<"Yeuthich"> | number
    baivietID?: IntFilter<"Yeuthich"> | number
    nguoidungID?: IntFilter<"Yeuthich"> | number
    ngaytao?: DateTimeFilter<"Yeuthich"> | Date | string
  }

  export type BaivietCreateWithoutBinhluanInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chude: ChudeCreateNestedOneWithoutBaivietInput
    tacgia: UserCreateNestedOneWithoutBaivietInput
    thongbao?: ThongbaoCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateWithoutBinhluanInput = {
    id?: number
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietCreateOrConnectWithoutBinhluanInput = {
    where: BaivietWhereUniqueInput
    create: XOR<BaivietCreateWithoutBinhluanInput, BaivietUncheckedCreateWithoutBinhluanInput>
  }

  export type UserCreateWithoutBinhluanInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutBinhluanInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutBinhluanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBinhluanInput, UserUncheckedCreateWithoutBinhluanInput>
  }

  export type ThongbaoCreateWithoutBinhluanInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    baiviet?: BaivietCreateNestedOneWithoutThongbaoInput
    nguoidung: UserCreateNestedOneWithoutThongbaoInput
    nguoitao: UserCreateNestedOneWithoutThongbaoDaTaoInput
    yeuthich?: YeuthichCreateNestedOneWithoutThongbaoInput
  }

  export type ThongbaoUncheckedCreateWithoutBinhluanInput = {
    id?: number
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateOrConnectWithoutBinhluanInput = {
    where: ThongbaoWhereUniqueInput
    create: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput>
  }

  export type ThongbaoCreateManyBinhluanInputEnvelope = {
    data: ThongbaoCreateManyBinhluanInput | ThongbaoCreateManyBinhluanInput[]
  }

  export type BaivietUpsertWithoutBinhluanInput = {
    update: XOR<BaivietUpdateWithoutBinhluanInput, BaivietUncheckedUpdateWithoutBinhluanInput>
    create: XOR<BaivietCreateWithoutBinhluanInput, BaivietUncheckedCreateWithoutBinhluanInput>
    where?: BaivietWhereInput
  }

  export type BaivietUpdateToOneWithWhereWithoutBinhluanInput = {
    where?: BaivietWhereInput
    data: XOR<BaivietUpdateWithoutBinhluanInput, BaivietUncheckedUpdateWithoutBinhluanInput>
  }

  export type BaivietUpdateWithoutBinhluanInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chude?: ChudeUpdateOneRequiredWithoutBaivietNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBaivietNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateWithoutBinhluanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type UserUpsertWithoutBinhluanInput = {
    update: XOR<UserUpdateWithoutBinhluanInput, UserUncheckedUpdateWithoutBinhluanInput>
    create: XOR<UserCreateWithoutBinhluanInput, UserUncheckedCreateWithoutBinhluanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBinhluanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBinhluanInput, UserUncheckedUpdateWithoutBinhluanInput>
  }

  export type UserUpdateWithoutBinhluanInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutBinhluanInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type ThongbaoUpsertWithWhereUniqueWithoutBinhluanInput = {
    where: ThongbaoWhereUniqueInput
    update: XOR<ThongbaoUpdateWithoutBinhluanInput, ThongbaoUncheckedUpdateWithoutBinhluanInput>
    create: XOR<ThongbaoCreateWithoutBinhluanInput, ThongbaoUncheckedCreateWithoutBinhluanInput>
  }

  export type ThongbaoUpdateWithWhereUniqueWithoutBinhluanInput = {
    where: ThongbaoWhereUniqueInput
    data: XOR<ThongbaoUpdateWithoutBinhluanInput, ThongbaoUncheckedUpdateWithoutBinhluanInput>
  }

  export type ThongbaoUpdateManyWithWhereWithoutBinhluanInput = {
    where: ThongbaoScalarWhereInput
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyWithoutBinhluanInput>
  }

  export type UserCreateWithoutDangtheodoiInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutDangtheodoiInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutDangtheodoiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDangtheodoiInput, UserUncheckedCreateWithoutDangtheodoiInput>
  }

  export type UserCreateWithoutNguoitheodoiInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutNguoitheodoiInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutNguoitheodoiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNguoitheodoiInput, UserUncheckedCreateWithoutNguoitheodoiInput>
  }

  export type UserUpsertWithoutDangtheodoiInput = {
    update: XOR<UserUpdateWithoutDangtheodoiInput, UserUncheckedUpdateWithoutDangtheodoiInput>
    create: XOR<UserCreateWithoutDangtheodoiInput, UserUncheckedCreateWithoutDangtheodoiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDangtheodoiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDangtheodoiInput, UserUncheckedUpdateWithoutDangtheodoiInput>
  }

  export type UserUpdateWithoutDangtheodoiInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutDangtheodoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUpsertWithoutNguoitheodoiInput = {
    update: XOR<UserUpdateWithoutNguoitheodoiInput, UserUncheckedUpdateWithoutNguoitheodoiInput>
    create: XOR<UserCreateWithoutNguoitheodoiInput, UserUncheckedCreateWithoutNguoitheodoiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNguoitheodoiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNguoitheodoiInput, UserUncheckedUpdateWithoutNguoitheodoiInput>
  }

  export type UserUpdateWithoutNguoitheodoiInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutNguoitheodoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type ChudeCreateWithoutBaivietInput = {
    ten: string
  }

  export type ChudeUncheckedCreateWithoutBaivietInput = {
    id?: number
    ten: string
  }

  export type ChudeCreateOrConnectWithoutBaivietInput = {
    where: ChudeWhereUniqueInput
    create: XOR<ChudeCreateWithoutBaivietInput, ChudeUncheckedCreateWithoutBaivietInput>
  }

  export type UserCreateWithoutBaivietInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutBaivietInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutBaivietInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBaivietInput, UserUncheckedCreateWithoutBaivietInput>
  }

  export type BinhluanCreateWithoutBaivietInput = {
    noidung: string
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    tacgia: UserCreateNestedOneWithoutBinhluanInput
    thongbao?: ThongbaoCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanUncheckedCreateWithoutBaivietInput = {
    id?: number
    noidung: string
    tacgiaID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBinhluanInput
  }

  export type BinhluanCreateOrConnectWithoutBaivietInput = {
    where: BinhluanWhereUniqueInput
    create: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput>
  }

  export type BinhluanCreateManyBaivietInputEnvelope = {
    data: BinhluanCreateManyBaivietInput | BinhluanCreateManyBaivietInput[]
  }

  export type ThongbaoCreateWithoutBaivietInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    binhluan?: BinhluanCreateNestedOneWithoutThongbaoInput
    nguoidung: UserCreateNestedOneWithoutThongbaoInput
    nguoitao: UserCreateNestedOneWithoutThongbaoDaTaoInput
    yeuthich?: YeuthichCreateNestedOneWithoutThongbaoInput
  }

  export type ThongbaoUncheckedCreateWithoutBaivietInput = {
    id?: number
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateOrConnectWithoutBaivietInput = {
    where: ThongbaoWhereUniqueInput
    create: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput>
  }

  export type ThongbaoCreateManyBaivietInputEnvelope = {
    data: ThongbaoCreateManyBaivietInput | ThongbaoCreateManyBaivietInput[]
  }

  export type YeuthichCreateWithoutBaivietInput = {
    ngaytao?: Date | string
    thongbao?: ThongbaoCreateNestedManyWithoutYeuthichInput
    nguoidung: UserCreateNestedOneWithoutYeuthichInput
  }

  export type YeuthichUncheckedCreateWithoutBaivietInput = {
    id?: number
    nguoidungID: number
    ngaytao?: Date | string
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutYeuthichInput
  }

  export type YeuthichCreateOrConnectWithoutBaivietInput = {
    where: YeuthichWhereUniqueInput
    create: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput>
  }

  export type YeuthichCreateManyBaivietInputEnvelope = {
    data: YeuthichCreateManyBaivietInput | YeuthichCreateManyBaivietInput[]
  }

  export type ChudeUpsertWithoutBaivietInput = {
    update: XOR<ChudeUpdateWithoutBaivietInput, ChudeUncheckedUpdateWithoutBaivietInput>
    create: XOR<ChudeCreateWithoutBaivietInput, ChudeUncheckedCreateWithoutBaivietInput>
    where?: ChudeWhereInput
  }

  export type ChudeUpdateToOneWithWhereWithoutBaivietInput = {
    where?: ChudeWhereInput
    data: XOR<ChudeUpdateWithoutBaivietInput, ChudeUncheckedUpdateWithoutBaivietInput>
  }

  export type ChudeUpdateWithoutBaivietInput = {
    ten?: StringFieldUpdateOperationsInput | string
  }

  export type ChudeUncheckedUpdateWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    ten?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBaivietInput = {
    update: XOR<UserUpdateWithoutBaivietInput, UserUncheckedUpdateWithoutBaivietInput>
    create: XOR<UserCreateWithoutBaivietInput, UserUncheckedCreateWithoutBaivietInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBaivietInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBaivietInput, UserUncheckedUpdateWithoutBaivietInput>
  }

  export type UserUpdateWithoutBaivietInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type BinhluanUpsertWithWhereUniqueWithoutBaivietInput = {
    where: BinhluanWhereUniqueInput
    update: XOR<BinhluanUpdateWithoutBaivietInput, BinhluanUncheckedUpdateWithoutBaivietInput>
    create: XOR<BinhluanCreateWithoutBaivietInput, BinhluanUncheckedCreateWithoutBaivietInput>
  }

  export type BinhluanUpdateWithWhereUniqueWithoutBaivietInput = {
    where: BinhluanWhereUniqueInput
    data: XOR<BinhluanUpdateWithoutBaivietInput, BinhluanUncheckedUpdateWithoutBaivietInput>
  }

  export type BinhluanUpdateManyWithWhereWithoutBaivietInput = {
    where: BinhluanScalarWhereInput
    data: XOR<BinhluanUpdateManyMutationInput, BinhluanUncheckedUpdateManyWithoutBaivietInput>
  }

  export type ThongbaoUpsertWithWhereUniqueWithoutBaivietInput = {
    where: ThongbaoWhereUniqueInput
    update: XOR<ThongbaoUpdateWithoutBaivietInput, ThongbaoUncheckedUpdateWithoutBaivietInput>
    create: XOR<ThongbaoCreateWithoutBaivietInput, ThongbaoUncheckedCreateWithoutBaivietInput>
  }

  export type ThongbaoUpdateWithWhereUniqueWithoutBaivietInput = {
    where: ThongbaoWhereUniqueInput
    data: XOR<ThongbaoUpdateWithoutBaivietInput, ThongbaoUncheckedUpdateWithoutBaivietInput>
  }

  export type ThongbaoUpdateManyWithWhereWithoutBaivietInput = {
    where: ThongbaoScalarWhereInput
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyWithoutBaivietInput>
  }

  export type YeuthichUpsertWithWhereUniqueWithoutBaivietInput = {
    where: YeuthichWhereUniqueInput
    update: XOR<YeuthichUpdateWithoutBaivietInput, YeuthichUncheckedUpdateWithoutBaivietInput>
    create: XOR<YeuthichCreateWithoutBaivietInput, YeuthichUncheckedCreateWithoutBaivietInput>
  }

  export type YeuthichUpdateWithWhereUniqueWithoutBaivietInput = {
    where: YeuthichWhereUniqueInput
    data: XOR<YeuthichUpdateWithoutBaivietInput, YeuthichUncheckedUpdateWithoutBaivietInput>
  }

  export type YeuthichUpdateManyWithWhereWithoutBaivietInput = {
    where: YeuthichScalarWhereInput
    data: XOR<YeuthichUpdateManyMutationInput, YeuthichUncheckedUpdateManyWithoutBaivietInput>
  }

  export type ThongbaoCreateWithoutYeuthichInput = {
    noidung?: string | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
    baiviet?: BaivietCreateNestedOneWithoutThongbaoInput
    binhluan?: BinhluanCreateNestedOneWithoutThongbaoInput
    nguoidung: UserCreateNestedOneWithoutThongbaoInput
    nguoitao: UserCreateNestedOneWithoutThongbaoDaTaoInput
  }

  export type ThongbaoUncheckedCreateWithoutYeuthichInput = {
    id?: number
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateOrConnectWithoutYeuthichInput = {
    where: ThongbaoWhereUniqueInput
    create: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput>
  }

  export type ThongbaoCreateManyYeuthichInputEnvelope = {
    data: ThongbaoCreateManyYeuthichInput | ThongbaoCreateManyYeuthichInput[]
  }

  export type BaivietCreateWithoutYeuthichInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chude: ChudeCreateNestedOneWithoutBaivietInput
    tacgia: UserCreateNestedOneWithoutBaivietInput
    binhluan?: BinhluanCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateWithoutYeuthichInput = {
    id?: number
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietCreateOrConnectWithoutYeuthichInput = {
    where: BaivietWhereUniqueInput
    create: XOR<BaivietCreateWithoutYeuthichInput, BaivietUncheckedCreateWithoutYeuthichInput>
  }

  export type UserCreateWithoutYeuthichInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
  }

  export type UserUncheckedCreateWithoutYeuthichInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
  }

  export type UserCreateOrConnectWithoutYeuthichInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutYeuthichInput, UserUncheckedCreateWithoutYeuthichInput>
  }

  export type ThongbaoUpsertWithWhereUniqueWithoutYeuthichInput = {
    where: ThongbaoWhereUniqueInput
    update: XOR<ThongbaoUpdateWithoutYeuthichInput, ThongbaoUncheckedUpdateWithoutYeuthichInput>
    create: XOR<ThongbaoCreateWithoutYeuthichInput, ThongbaoUncheckedCreateWithoutYeuthichInput>
  }

  export type ThongbaoUpdateWithWhereUniqueWithoutYeuthichInput = {
    where: ThongbaoWhereUniqueInput
    data: XOR<ThongbaoUpdateWithoutYeuthichInput, ThongbaoUncheckedUpdateWithoutYeuthichInput>
  }

  export type ThongbaoUpdateManyWithWhereWithoutYeuthichInput = {
    where: ThongbaoScalarWhereInput
    data: XOR<ThongbaoUpdateManyMutationInput, ThongbaoUncheckedUpdateManyWithoutYeuthichInput>
  }

  export type BaivietUpsertWithoutYeuthichInput = {
    update: XOR<BaivietUpdateWithoutYeuthichInput, BaivietUncheckedUpdateWithoutYeuthichInput>
    create: XOR<BaivietCreateWithoutYeuthichInput, BaivietUncheckedCreateWithoutYeuthichInput>
    where?: BaivietWhereInput
  }

  export type BaivietUpdateToOneWithWhereWithoutYeuthichInput = {
    where?: BaivietWhereInput
    data: XOR<BaivietUpdateWithoutYeuthichInput, BaivietUncheckedUpdateWithoutYeuthichInput>
  }

  export type BaivietUpdateWithoutYeuthichInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chude?: ChudeUpdateOneRequiredWithoutBaivietNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBaivietNestedInput
    binhluan?: BinhluanUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateWithoutYeuthichInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
    binhluan?: BinhluanUncheckedUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type UserUpsertWithoutYeuthichInput = {
    update: XOR<UserUpdateWithoutYeuthichInput, UserUncheckedUpdateWithoutYeuthichInput>
    create: XOR<UserCreateWithoutYeuthichInput, UserUncheckedCreateWithoutYeuthichInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutYeuthichInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutYeuthichInput, UserUncheckedUpdateWithoutYeuthichInput>
  }

  export type UserUpdateWithoutYeuthichInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
  }

  export type UserUncheckedUpdateWithoutYeuthichInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
  }

  export type BaivietCreateWithoutThongbaoInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chude: ChudeCreateNestedOneWithoutBaivietInput
    tacgia: UserCreateNestedOneWithoutBaivietInput
    binhluan?: BinhluanCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateWithoutThongbaoInput = {
    id?: number
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietCreateOrConnectWithoutThongbaoInput = {
    where: BaivietWhereUniqueInput
    create: XOR<BaivietCreateWithoutThongbaoInput, BaivietUncheckedCreateWithoutThongbaoInput>
  }

  export type BinhluanCreateWithoutThongbaoInput = {
    noidung: string
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet: BaivietCreateNestedOneWithoutBinhluanInput
    tacgia: UserCreateNestedOneWithoutBinhluanInput
  }

  export type BinhluanUncheckedCreateWithoutThongbaoInput = {
    id?: number
    noidung: string
    baivietID: number
    tacgiaID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type BinhluanCreateOrConnectWithoutThongbaoInput = {
    where: BinhluanWhereUniqueInput
    create: XOR<BinhluanCreateWithoutThongbaoInput, BinhluanUncheckedCreateWithoutThongbaoInput>
  }

  export type UserCreateWithoutThongbaoInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutThongbaoInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutThongbaoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThongbaoInput, UserUncheckedCreateWithoutThongbaoInput>
  }

  export type UserCreateWithoutThongbaoDaTaoInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutThongbaoDaTaoInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutThongbaoDaTaoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThongbaoDaTaoInput, UserUncheckedCreateWithoutThongbaoDaTaoInput>
  }

  export type YeuthichCreateWithoutThongbaoInput = {
    ngaytao?: Date | string
    baiviet: BaivietCreateNestedOneWithoutYeuthichInput
    nguoidung: UserCreateNestedOneWithoutYeuthichInput
  }

  export type YeuthichUncheckedCreateWithoutThongbaoInput = {
    id?: number
    baivietID: number
    nguoidungID: number
    ngaytao?: Date | string
  }

  export type YeuthichCreateOrConnectWithoutThongbaoInput = {
    where: YeuthichWhereUniqueInput
    create: XOR<YeuthichCreateWithoutThongbaoInput, YeuthichUncheckedCreateWithoutThongbaoInput>
  }

  export type BaivietUpsertWithoutThongbaoInput = {
    update: XOR<BaivietUpdateWithoutThongbaoInput, BaivietUncheckedUpdateWithoutThongbaoInput>
    create: XOR<BaivietCreateWithoutThongbaoInput, BaivietUncheckedCreateWithoutThongbaoInput>
    where?: BaivietWhereInput
  }

  export type BaivietUpdateToOneWithWhereWithoutThongbaoInput = {
    where?: BaivietWhereInput
    data: XOR<BaivietUpdateWithoutThongbaoInput, BaivietUncheckedUpdateWithoutThongbaoInput>
  }

  export type BaivietUpdateWithoutThongbaoInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chude?: ChudeUpdateOneRequiredWithoutBaivietNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBaivietNestedInput
    binhluan?: BinhluanUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateWithoutThongbaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
    binhluan?: BinhluanUncheckedUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type BinhluanUpsertWithoutThongbaoInput = {
    update: XOR<BinhluanUpdateWithoutThongbaoInput, BinhluanUncheckedUpdateWithoutThongbaoInput>
    create: XOR<BinhluanCreateWithoutThongbaoInput, BinhluanUncheckedCreateWithoutThongbaoInput>
    where?: BinhluanWhereInput
  }

  export type BinhluanUpdateToOneWithWhereWithoutThongbaoInput = {
    where?: BinhluanWhereInput
    data: XOR<BinhluanUpdateWithoutThongbaoInput, BinhluanUncheckedUpdateWithoutThongbaoInput>
  }

  export type BinhluanUpdateWithoutThongbaoInput = {
    noidung?: StringFieldUpdateOperationsInput | string
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateOneRequiredWithoutBinhluanNestedInput
    tacgia?: UserUpdateOneRequiredWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateWithoutThongbaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    baivietID?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutThongbaoInput = {
    update: XOR<UserUpdateWithoutThongbaoInput, UserUncheckedUpdateWithoutThongbaoInput>
    create: XOR<UserCreateWithoutThongbaoInput, UserUncheckedCreateWithoutThongbaoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThongbaoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThongbaoInput, UserUncheckedUpdateWithoutThongbaoInput>
  }

  export type UserUpdateWithoutThongbaoInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutThongbaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUpsertWithoutThongbaoDaTaoInput = {
    update: XOR<UserUpdateWithoutThongbaoDaTaoInput, UserUncheckedUpdateWithoutThongbaoDaTaoInput>
    create: XOR<UserCreateWithoutThongbaoDaTaoInput, UserUncheckedCreateWithoutThongbaoDaTaoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThongbaoDaTaoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThongbaoDaTaoInput, UserUncheckedUpdateWithoutThongbaoDaTaoInput>
  }

  export type UserUpdateWithoutThongbaoDaTaoInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutThongbaoDaTaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type YeuthichUpsertWithoutThongbaoInput = {
    update: XOR<YeuthichUpdateWithoutThongbaoInput, YeuthichUncheckedUpdateWithoutThongbaoInput>
    create: XOR<YeuthichCreateWithoutThongbaoInput, YeuthichUncheckedCreateWithoutThongbaoInput>
    where?: YeuthichWhereInput
  }

  export type YeuthichUpdateToOneWithWhereWithoutThongbaoInput = {
    where?: YeuthichWhereInput
    data: XOR<YeuthichUpdateWithoutThongbaoInput, YeuthichUncheckedUpdateWithoutThongbaoInput>
  }

  export type YeuthichUpdateWithoutThongbaoInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateOneRequiredWithoutYeuthichNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateWithoutThongbaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    baivietID?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaivietCreateWithoutChudeInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    tacgia: UserCreateNestedOneWithoutBaivietInput
    binhluan?: BinhluanCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichCreateNestedManyWithoutBaivietInput
  }

  export type BaivietUncheckedCreateWithoutChudeInput = {
    id?: number
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutBaivietInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutBaivietInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutBaivietInput
  }

  export type BaivietCreateOrConnectWithoutChudeInput = {
    where: BaivietWhereUniqueInput
    create: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput>
  }

  export type BaivietCreateManyChudeInputEnvelope = {
    data: BaivietCreateManyChudeInput | BaivietCreateManyChudeInput[]
  }

  export type BaivietUpsertWithWhereUniqueWithoutChudeInput = {
    where: BaivietWhereUniqueInput
    update: XOR<BaivietUpdateWithoutChudeInput, BaivietUncheckedUpdateWithoutChudeInput>
    create: XOR<BaivietCreateWithoutChudeInput, BaivietUncheckedCreateWithoutChudeInput>
  }

  export type BaivietUpdateWithWhereUniqueWithoutChudeInput = {
    where: BaivietWhereUniqueInput
    data: XOR<BaivietUpdateWithoutChudeInput, BaivietUncheckedUpdateWithoutChudeInput>
  }

  export type BaivietUpdateManyWithWhereWithoutChudeInput = {
    where: BaivietScalarWhereInput
    data: XOR<BaivietUpdateManyMutationInput, BaivietUncheckedUpdateManyWithoutChudeInput>
  }

  export type CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput = {
    thamGiaLuc?: Date | string
    nguoiDung: UserCreateNestedOneWithoutThamGiaCuocTroChuyenInput
  }

  export type CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput = {
    id?: number
    nguoiDungId: number
    thamGiaLuc?: Date | string
  }

  export type CuocTroChuyenThanhVienCreateOrConnectWithoutCuocTroChuyenInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    create: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput>
  }

  export type CuocTroChuyenThanhVienCreateManyCuocTroChuyenInputEnvelope = {
    data: CuocTroChuyenThanhVienCreateManyCuocTroChuyenInput | CuocTroChuyenThanhVienCreateManyCuocTroChuyenInput[]
  }

  export type TinNhanCreateWithoutCuocTroChuyenInput = {
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
    nguoiGui: UserCreateNestedOneWithoutTinNhanGuiInput
  }

  export type TinNhanUncheckedCreateWithoutCuocTroChuyenInput = {
    id?: number
    nguoiGuiId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type TinNhanCreateOrConnectWithoutCuocTroChuyenInput = {
    where: TinNhanWhereUniqueInput
    create: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput>
  }

  export type TinNhanCreateManyCuocTroChuyenInputEnvelope = {
    data: TinNhanCreateManyCuocTroChuyenInput | TinNhanCreateManyCuocTroChuyenInput[]
  }

  export type CuocTroChuyenThanhVienUpsertWithWhereUniqueWithoutCuocTroChuyenInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    update: XOR<CuocTroChuyenThanhVienUpdateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedUpdateWithoutCuocTroChuyenInput>
    create: XOR<CuocTroChuyenThanhVienCreateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedCreateWithoutCuocTroChuyenInput>
  }

  export type CuocTroChuyenThanhVienUpdateWithWhereUniqueWithoutCuocTroChuyenInput = {
    where: CuocTroChuyenThanhVienWhereUniqueInput
    data: XOR<CuocTroChuyenThanhVienUpdateWithoutCuocTroChuyenInput, CuocTroChuyenThanhVienUncheckedUpdateWithoutCuocTroChuyenInput>
  }

  export type CuocTroChuyenThanhVienUpdateManyWithWhereWithoutCuocTroChuyenInput = {
    where: CuocTroChuyenThanhVienScalarWhereInput
    data: XOR<CuocTroChuyenThanhVienUpdateManyMutationInput, CuocTroChuyenThanhVienUncheckedUpdateManyWithoutCuocTroChuyenInput>
  }

  export type TinNhanUpsertWithWhereUniqueWithoutCuocTroChuyenInput = {
    where: TinNhanWhereUniqueInput
    update: XOR<TinNhanUpdateWithoutCuocTroChuyenInput, TinNhanUncheckedUpdateWithoutCuocTroChuyenInput>
    create: XOR<TinNhanCreateWithoutCuocTroChuyenInput, TinNhanUncheckedCreateWithoutCuocTroChuyenInput>
  }

  export type TinNhanUpdateWithWhereUniqueWithoutCuocTroChuyenInput = {
    where: TinNhanWhereUniqueInput
    data: XOR<TinNhanUpdateWithoutCuocTroChuyenInput, TinNhanUncheckedUpdateWithoutCuocTroChuyenInput>
  }

  export type TinNhanUpdateManyWithWhereWithoutCuocTroChuyenInput = {
    where: TinNhanScalarWhereInput
    data: XOR<TinNhanUpdateManyMutationInput, TinNhanUncheckedUpdateManyWithoutCuocTroChuyenInput>
  }

  export type CuocTroChuyenCreateWithoutThanhVienInput = {
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    tinNhan?: TinNhanCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenUncheckedCreateWithoutThanhVienInput = {
    id?: number
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    tinNhan?: TinNhanUncheckedCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenCreateOrConnectWithoutThanhVienInput = {
    where: CuocTroChuyenWhereUniqueInput
    create: XOR<CuocTroChuyenCreateWithoutThanhVienInput, CuocTroChuyenUncheckedCreateWithoutThanhVienInput>
  }

  export type UserCreateWithoutThamGiaCuocTroChuyenInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutThamGiaCuocTroChuyenInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    tinNhanGui?: TinNhanUncheckedCreateNestedManyWithoutNguoiGuiInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutThamGiaCuocTroChuyenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThamGiaCuocTroChuyenInput, UserUncheckedCreateWithoutThamGiaCuocTroChuyenInput>
  }

  export type CuocTroChuyenUpsertWithoutThanhVienInput = {
    update: XOR<CuocTroChuyenUpdateWithoutThanhVienInput, CuocTroChuyenUncheckedUpdateWithoutThanhVienInput>
    create: XOR<CuocTroChuyenCreateWithoutThanhVienInput, CuocTroChuyenUncheckedCreateWithoutThanhVienInput>
    where?: CuocTroChuyenWhereInput
  }

  export type CuocTroChuyenUpdateToOneWithWhereWithoutThanhVienInput = {
    where?: CuocTroChuyenWhereInput
    data: XOR<CuocTroChuyenUpdateWithoutThanhVienInput, CuocTroChuyenUncheckedUpdateWithoutThanhVienInput>
  }

  export type CuocTroChuyenUpdateWithoutThanhVienInput = {
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    tinNhan?: TinNhanUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenUncheckedUpdateWithoutThanhVienInput = {
    id?: IntFieldUpdateOperationsInput | number
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    tinNhan?: TinNhanUncheckedUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type UserUpsertWithoutThamGiaCuocTroChuyenInput = {
    update: XOR<UserUpdateWithoutThamGiaCuocTroChuyenInput, UserUncheckedUpdateWithoutThamGiaCuocTroChuyenInput>
    create: XOR<UserCreateWithoutThamGiaCuocTroChuyenInput, UserUncheckedCreateWithoutThamGiaCuocTroChuyenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThamGiaCuocTroChuyenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThamGiaCuocTroChuyenInput, UserUncheckedUpdateWithoutThamGiaCuocTroChuyenInput>
  }

  export type UserUpdateWithoutThamGiaCuocTroChuyenInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutThamGiaCuocTroChuyenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    tinNhanGui?: TinNhanUncheckedUpdateManyWithoutNguoiGuiNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type CuocTroChuyenCreateWithoutTinNhanInput = {
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    thanhVien?: CuocTroChuyenThanhVienCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenUncheckedCreateWithoutTinNhanInput = {
    id?: number
    taoLuc?: Date | string
    capNhatLuc?: Date | string
    thanhVien?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutCuocTroChuyenInput
  }

  export type CuocTroChuyenCreateOrConnectWithoutTinNhanInput = {
    where: CuocTroChuyenWhereUniqueInput
    create: XOR<CuocTroChuyenCreateWithoutTinNhanInput, CuocTroChuyenUncheckedCreateWithoutTinNhanInput>
  }

  export type UserCreateWithoutTinNhanGuiInput = {
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoCreateNestedManyWithoutNguoitaoInput
    yeuthich?: YeuthichCreateNestedManyWithoutNguoidungInput
  }

  export type UserUncheckedCreateWithoutTinNhanGuiInput = {
    id?: number
    email: string
    username: string
    clerkId: string
    ten?: string | null
    tieusu?: string | null
    hinhanh?: string | null
    diachi?: string | null
    website?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    baiviet?: BaivietUncheckedCreateNestedManyWithoutTacgiaInput
    binhluan?: BinhluanUncheckedCreateNestedManyWithoutTacgiaInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedCreateNestedManyWithoutNguoiDungInput
    dangtheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiTheoDoiInput
    nguoitheodoi?: TheodoiUncheckedCreateNestedManyWithoutNguoiDuocTheoDoiInput
    thongbao?: ThongbaoUncheckedCreateNestedManyWithoutNguoidungInput
    thongbaoDaTao?: ThongbaoUncheckedCreateNestedManyWithoutNguoitaoInput
    yeuthich?: YeuthichUncheckedCreateNestedManyWithoutNguoidungInput
  }

  export type UserCreateOrConnectWithoutTinNhanGuiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTinNhanGuiInput, UserUncheckedCreateWithoutTinNhanGuiInput>
  }

  export type CuocTroChuyenUpsertWithoutTinNhanInput = {
    update: XOR<CuocTroChuyenUpdateWithoutTinNhanInput, CuocTroChuyenUncheckedUpdateWithoutTinNhanInput>
    create: XOR<CuocTroChuyenCreateWithoutTinNhanInput, CuocTroChuyenUncheckedCreateWithoutTinNhanInput>
    where?: CuocTroChuyenWhereInput
  }

  export type CuocTroChuyenUpdateToOneWithWhereWithoutTinNhanInput = {
    where?: CuocTroChuyenWhereInput
    data: XOR<CuocTroChuyenUpdateWithoutTinNhanInput, CuocTroChuyenUncheckedUpdateWithoutTinNhanInput>
  }

  export type CuocTroChuyenUpdateWithoutTinNhanInput = {
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    thanhVien?: CuocTroChuyenThanhVienUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenUncheckedUpdateWithoutTinNhanInput = {
    id?: IntFieldUpdateOperationsInput | number
    taoLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    capNhatLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    thanhVien?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutCuocTroChuyenNestedInput
  }

  export type UserUpsertWithoutTinNhanGuiInput = {
    update: XOR<UserUpdateWithoutTinNhanGuiInput, UserUncheckedUpdateWithoutTinNhanGuiInput>
    create: XOR<UserCreateWithoutTinNhanGuiInput, UserUncheckedCreateWithoutTinNhanGuiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTinNhanGuiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTinNhanGuiInput, UserUncheckedUpdateWithoutTinNhanGuiInput>
  }

  export type UserUpdateWithoutTinNhanGuiInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUpdateManyWithoutNguoitaoNestedInput
    yeuthich?: YeuthichUpdateManyWithoutNguoidungNestedInput
  }

  export type UserUncheckedUpdateWithoutTinNhanGuiInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    ten?: NullableStringFieldUpdateOperationsInput | string | null
    tieusu?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    diachi?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUncheckedUpdateManyWithoutTacgiaNestedInput
    binhluan?: BinhluanUncheckedUpdateManyWithoutTacgiaNestedInput
    thamGiaCuocTroChuyen?: CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungNestedInput
    dangtheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiNestedInput
    nguoitheodoi?: TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutNguoidungNestedInput
    thongbaoDaTao?: ThongbaoUncheckedUpdateManyWithoutNguoitaoNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutNguoidungNestedInput
  }

  export type BaivietCreateManyTacgiaInput = {
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    chudeID: number
  }

  export type BinhluanCreateManyTacgiaInput = {
    noidung: string
    baivietID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type CuocTroChuyenThanhVienCreateManyNguoiDungInput = {
    cuocTroChuyenId: number
    thamGiaLuc?: Date | string
  }

  export type TheodoiCreateManyNguoiTheoDoiInput = {
    nguoitheodoiID: number
    ngaytao?: Date | string
  }

  export type TheodoiCreateManyNguoiDuocTheoDoiInput = {
    nguoidangtheodoiID: number
    ngaytao?: Date | string
  }

  export type ThongbaoCreateManyNguoidungInput = {
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoCreateManyNguoitaoInput = {
    nguoidungID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type TinNhanCreateManyNguoiGuiInput = {
    cuocTroChuyenId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type YeuthichCreateManyNguoidungInput = {
    baivietID: number
    ngaytao?: Date | string
  }

  export type BaivietUpdateWithoutTacgiaInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chude?: ChudeUpdateOneRequiredWithoutBaivietNestedInput
    binhluan?: BinhluanUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateWithoutTacgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
    binhluan?: BinhluanUncheckedUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateManyWithoutTacgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    chudeID?: IntFieldUpdateOperationsInput | number
  }

  export type BinhluanUpdateWithoutTacgiaInput = {
    noidung?: StringFieldUpdateOperationsInput | string
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    baiviet?: BaivietUpdateOneRequiredWithoutBinhluanNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateWithoutTacgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    baivietID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateManyWithoutTacgiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    baivietID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienUpdateWithoutNguoiDungInput = {
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    cuocTroChuyen?: CuocTroChuyenUpdateOneRequiredWithoutThanhVienNestedInput
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiUpdateWithoutNguoiTheoDoiInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    nguoiDuocTheoDoi?: UserUpdateOneRequiredWithoutNguoitheodoiNestedInput
  }

  export type TheodoiUncheckedUpdateWithoutNguoiTheoDoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoitheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiUncheckedUpdateManyWithoutNguoiTheoDoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoitheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiUpdateWithoutNguoiDuocTheoDoiInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    nguoiTheoDoi?: UserUpdateOneRequiredWithoutDangtheodoiNestedInput
  }

  export type TheodoiUncheckedUpdateWithoutNguoiDuocTheoDoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidangtheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheodoiUncheckedUpdateManyWithoutNguoiDuocTheoDoiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidangtheodoiID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThongbaoUpdateWithoutNguoidungInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    baiviet?: BaivietUpdateOneWithoutThongbaoNestedInput
    binhluan?: BinhluanUpdateOneWithoutThongbaoNestedInput
    nguoitao?: UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput
    yeuthich?: YeuthichUpdateOneWithoutThongbaoNestedInput
  }

  export type ThongbaoUncheckedUpdateWithoutNguoidungInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyWithoutNguoidungInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUpdateWithoutNguoitaoInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    baiviet?: BaivietUpdateOneWithoutThongbaoNestedInput
    binhluan?: BinhluanUpdateOneWithoutThongbaoNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutThongbaoNestedInput
    yeuthich?: YeuthichUpdateOneWithoutThongbaoNestedInput
  }

  export type ThongbaoUncheckedUpdateWithoutNguoitaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyWithoutNguoitaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TinNhanUpdateWithoutNguoiGuiInput = {
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
    cuocTroChuyen?: CuocTroChuyenUpdateOneRequiredWithoutTinNhanNestedInput
  }

  export type TinNhanUncheckedUpdateWithoutNguoiGuiInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TinNhanUncheckedUpdateManyWithoutNguoiGuiInput = {
    id?: IntFieldUpdateOperationsInput | number
    cuocTroChuyenId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type YeuthichUpdateWithoutNguoidungInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUpdateManyWithoutYeuthichNestedInput
    baiviet?: BaivietUpdateOneRequiredWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateWithoutNguoidungInput = {
    id?: IntFieldUpdateOperationsInput | number
    baivietID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateManyWithoutNguoidungInput = {
    id?: IntFieldUpdateOperationsInput | number
    baivietID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThongbaoCreateManyBinhluanInput = {
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoUpdateWithoutBinhluanInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    baiviet?: BaivietUpdateOneWithoutThongbaoNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutThongbaoNestedInput
    nguoitao?: UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput
    yeuthich?: YeuthichUpdateOneWithoutThongbaoNestedInput
  }

  export type ThongbaoUncheckedUpdateWithoutBinhluanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyWithoutBinhluanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BinhluanCreateManyBaivietInput = {
    noidung: string
    tacgiaID: number
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type ThongbaoCreateManyBaivietInput = {
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    binhluanID?: number | null
    yeuthichID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type YeuthichCreateManyBaivietInput = {
    nguoidungID: number
    ngaytao?: Date | string
  }

  export type BinhluanUpdateWithoutBaivietInput = {
    noidung?: StringFieldUpdateOperationsInput | string
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    tacgia?: UserUpdateOneRequiredWithoutBinhluanNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    tacgiaID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBinhluanNestedInput
  }

  export type BinhluanUncheckedUpdateManyWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    noidung?: StringFieldUpdateOperationsInput | string
    tacgiaID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThongbaoUpdateWithoutBaivietInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    binhluan?: BinhluanUpdateOneWithoutThongbaoNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutThongbaoNestedInput
    nguoitao?: UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput
    yeuthich?: YeuthichUpdateOneWithoutThongbaoNestedInput
  }

  export type ThongbaoUncheckedUpdateWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    yeuthichID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type YeuthichUpdateWithoutBaivietInput = {
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUpdateManyWithoutYeuthichNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao?: ThongbaoUncheckedUpdateManyWithoutYeuthichNestedInput
  }

  export type YeuthichUncheckedUpdateManyWithoutBaivietInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThongbaoCreateManyYeuthichInput = {
    nguoidungID: number
    nguoitaoID: number
    noidung?: string | null
    baivietID?: number | null
    binhluanID?: number | null
    loai?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
    daXem?: boolean
  }

  export type ThongbaoUpdateWithoutYeuthichInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
    baiviet?: BaivietUpdateOneWithoutThongbaoNestedInput
    binhluan?: BinhluanUpdateOneWithoutThongbaoNestedInput
    nguoidung?: UserUpdateOneRequiredWithoutThongbaoNestedInput
    nguoitao?: UserUpdateOneRequiredWithoutThongbaoDaTaoNestedInput
  }

  export type ThongbaoUncheckedUpdateWithoutYeuthichInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThongbaoUncheckedUpdateManyWithoutYeuthichInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoidungID?: IntFieldUpdateOperationsInput | number
    nguoitaoID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    baivietID?: NullableIntFieldUpdateOperationsInput | number | null
    binhluanID?: NullableIntFieldUpdateOperationsInput | number | null
    loai?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    daXem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BaivietCreateManyChudeInput = {
    tacgiaID: number
    noidung?: string | null
    hinhanh?: string | null
    ngaytao?: Date | string
    ngaycapnhat?: Date | string
  }

  export type BaivietUpdateWithoutChudeInput = {
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    tacgia?: UserUpdateOneRequiredWithoutBaivietNestedInput
    binhluan?: BinhluanUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateWithoutChudeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
    binhluan?: BinhluanUncheckedUpdateManyWithoutBaivietNestedInput
    thongbao?: ThongbaoUncheckedUpdateManyWithoutBaivietNestedInput
    yeuthich?: YeuthichUncheckedUpdateManyWithoutBaivietNestedInput
  }

  export type BaivietUncheckedUpdateManyWithoutChudeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tacgiaID?: IntFieldUpdateOperationsInput | number
    noidung?: NullableStringFieldUpdateOperationsInput | string | null
    hinhanh?: NullableStringFieldUpdateOperationsInput | string | null
    ngaytao?: DateTimeFieldUpdateOperationsInput | Date | string
    ngaycapnhat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienCreateManyCuocTroChuyenInput = {
    nguoiDungId: number
    thamGiaLuc?: Date | string
  }

  export type TinNhanCreateManyCuocTroChuyenInput = {
    nguoiGuiId: number
    noiDung: string
    guiLuc?: Date | string
    daDoc?: boolean
  }

  export type CuocTroChuyenThanhVienUpdateWithoutCuocTroChuyenInput = {
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    nguoiDung?: UserUpdateOneRequiredWithoutThamGiaCuocTroChuyenNestedInput
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateWithoutCuocTroChuyenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiDungId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuocTroChuyenThanhVienUncheckedUpdateManyWithoutCuocTroChuyenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiDungId?: IntFieldUpdateOperationsInput | number
    thamGiaLuc?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TinNhanUpdateWithoutCuocTroChuyenInput = {
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
    nguoiGui?: UserUpdateOneRequiredWithoutTinNhanGuiNestedInput
  }

  export type TinNhanUncheckedUpdateWithoutCuocTroChuyenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiGuiId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TinNhanUncheckedUpdateManyWithoutCuocTroChuyenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nguoiGuiId?: IntFieldUpdateOperationsInput | number
    noiDung?: StringFieldUpdateOperationsInput | string
    guiLuc?: DateTimeFieldUpdateOperationsInput | Date | string
    daDoc?: BoolFieldUpdateOperationsInput | boolean
  }



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