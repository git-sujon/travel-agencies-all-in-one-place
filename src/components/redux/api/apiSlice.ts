// Need to use the React-specific entry point to import createApi
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

// Create a type for the baseQuery function
type CustomBaseQueryFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_URL}`,
  }) as CustomBaseQueryFn,
  tagTypes: [
    "userSignIN",
    "addUser",
    "updateUser",
    "deleteUser",
    "addPackage",
    "updatePackage",
    "deletePackage",
    "addAgency",
    "updateAgency",
    "deleteAgency",
  ],

  endpoints: (builder) => ({
    // Users

    userLogin: builder.mutation({
      query: ({ data }) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["userSignIN"],
    }),

    addUser: builder.mutation({
      query: ({ data }) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addUser"],
    }),

    getAllUsers: builder.query({
      query: ({ page, limit, sortField, sortValue }) =>
        // `/users?page=${page}&limit=${limit}&${sortField}=${sortValue}`,
        `/users`,
      providesTags: ["addUser", "updateUser", "deleteUser"],
    }),
    getSingleUser: builder.query({
      query: (id: string) => `/users/${id}`,
      providesTags: ["addUser", "updateUser", "deleteUser", "userSignIN"],
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateUser"],
    }),
    deleteUser: builder.mutation({
      query: ({ _id }) => ({
        url: `/users/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteUser"],
    }),

    // Packages

    getAllPackages: builder.query({
      query: ({ page, limit, sortField, sortValue }) =>
        // `/packages?page=${page}&limit=${limit}&${sortField}=${sortValue}`,
        `/packages?page=${page}&limit=${limit}`,
      providesTags: ["addPackage", "updatePackage", "deletePackage"],
    }),
    getSinglePackage: builder.query({
      query: (id: string) => `/packages/${id}`,
      providesTags: ["addPackage", "updatePackage", "deletePackage"],
    }),

    addPackage: builder.mutation({
      query: ({ data }) => ({
        url: "/packages/create-package",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addPackage"],
    }),
    updatePackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/packages/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updatePackage"],
    }),
    deletePackage: builder.mutation({
      query: ({ _id }) => ({
        url: `/packages/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deletePackage"],
    }),

    // Agency

    getAllAgencies: builder.query({
      query: ({ page, limit, sortField, sortValue }) =>
        // `/agencies?page=${page}&limit=${limit}&${sortField}=${sortValue}`,
        `/agencies`,
      providesTags: ["addAgency", "updateAgency", "deleteAgency"],
    }),
    getSingleAgency: builder.query({
      query: (id: string) => `/agencies/${id}`,
      providesTags: ["addAgency", "updateAgency", "deleteAgency"],
    }),

    addAgency: builder.mutation({
      query: ({ data }) => ({
        url: "/agencies/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addAgency"],
    }),

    updateAgency: builder.mutation({
      query: ({ id, data }) => ({
        url: `/agencies/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateAgency"],
    }),
    deleteAgency: builder.mutation({
      query: ({ _id }) => ({
        url: `/agencies/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteAgency"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetAllPackagesQuery,
  useGetSinglePackageQuery,
  useAddPackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
  useGetAllAgenciesQuery,
  useGetSingleAgencyQuery,
  useAddAgencyMutation,
  useUpdateAgencyMutation,
  useDeleteAgencyMutation,
} = api;
