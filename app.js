fetch("https://chatgpt.com/backend-api/conversation", {
  "headers": {
    "accept": "text/event-stream",
    "accept-language": "en-US,en;q=0.9,fa;q=0.8",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJwd2RfYXV0aF90aW1lIjoxNzMwNzIwNDg4MTY5LCJzZXNzaW9uX2lkIjoiNW50RUNNOFlqbHJBWDF0OUVNS0lUSXVCTV9NTnk4S0oiLCJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJkZXZlbG92ZXNwZXJAb3V0bG9vay5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLVJXQ3l3QWZvZXRNdHRFbVF6cUZvUHdXVSIsInVzZXJfaWQiOiJ1c2VyLTRJUEhhc2hSc3cyeTBsaG40bVVzQ0p6VyJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoid2luZG93c2xpdmV8ZDUyYjAxOTY4YjIyMmQ2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MzA3MjA0OTAsImV4cCI6MTczMTU4NDQ5MCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEcifQ.TMiIoETkARNze9hoUcq2uOekNEot6AAMDWQvEaZHk0jr3BjE2blvB6ouLw-CHVK7mWTq7DVAA5NSsdzucDLgNmysbe96KKI0CC99A6xZpIe4BA5mqcOT42vUwa8esRpFa1ksQ_tMQ1pAue7VFvH3tdUzkH3fZx5PSeXNml24u6tny1a2NcIwNoq5OM_LROmSYXh2iFwCsRdsu3T3xGOOelPSR9juNqTaUtVwrXc76RrbBuccmVqaMSWShbPWFEyuf4CRbzaohBhaXsTwN1feQeKR3_ep3OCynm8JEFXeVyx6rZwtTdxntW6q57__O-bXXwrPPz0L9eHHVLUJmCNAQQ",
    "content-type": "application/json",
    "oai-device-id": "442642f6-d219-4377-95a8-38b477dfb45e",
    "oai-echo-logs": "0,75890,1,79716,0,80935,4,80947,5,81148",
    "oai-language": "en-US",
    "openai-sentinel-chat-requirements-token": "gAAAAABnKLwFXcy5WC6tPr9xt1xM_80T_L3QjLB76jTi4qPTWgXjQ9TOJsAGOm4AOzmMY8ketLmn7WUjH-_3zd7Zk2kg-RqNhWdj0o63GRkhS9dMPI-7BkpOt7ZdBscu_rlYR4rdyxBk7AmatC2W5yRDFSkqWJTPHIRGEyPivCSBTiLfd_7vH8WKFbEa37ko44W3xTrOdTWPDvz_7lN0G10c7KZy_OxdSxpQ7YMpQtm4wWS3T5VUC8FWqF7gDHn1o4UYeAnGEbMELt1_wBn_HR4HZSE1nwZkIdyLc028kFfeRyRcx_rgNgKpbmCG_uL-I6n7k99uEOC5ao03Jt_LTcNwEE7JdEZZfiLlTBpnbb0qZRJoLl-AtZOHXjwNq6ImmqjqrH1PMekSASifSqcqNMOHPgpFcPmXrFdcH1GdAZfHISG3MawJM5nJuHH6bA4wO8GmE8-M9gRJKj2Fxudf8YCoACnHiWJ3G0WK-CkMVGexGnVp7rqbRVFE4LRKMvny7eg28JqKytlVG4_z8j93nU5BwUFeyW57X1y6FkV4vt7YxgCqF3z0KHQ4mtwyBTm_YomzIpXFTLsM8LqHPMyLcNCmZ2WjMzuCmgKXxUwLFGu6vKQs_ugNs2U1v7M94gACca08xEAuMUBxrvA4Hx8Hwuk59ycWPeSZL2TbDRFmSyU5UP3sRF3NTs6PFaUpbaqqOv1xvJ74l_3WmyPx_AmirgmsQE9fTsVTVyhuOzYsWzYl4uXC95JBmS-drn2vDWW7MJbb2inM3aGqxi1PFMzC4_G4VjEC_1NxX5Y4I9J_gp_oN5TfKYUpfBCfm-AsUwmBur_Unshfxebg5FNBvxRnKSl00upuL_rbmmoPrHPg6H-nCpbyTKtGnBApJ_lyxAHcdTNeJfggTDdVvm0WZBkASFiRk3dQiv56wC16FSajgeheXjfStXWrcR2zi5FSd3NGmuUogBYRUjoP4g5SzQMjHfifhc24oLclBJSHfZI8cm-a8faVkRmuFfykAyKbruapgQ0he_66HMtzwnZaHnt7ULJxcq_VC5hgOfiVcm63jICIHYQRFowASGfU5Sw7GNpu6zPEnRVbcj5-3DS6-np9cEXSzx6Qg3twdv5mTIMCknu0t_8KSVfSHNG6lA9JRmYTnZmnU6Q55mhGjd3Zg6Oz4afgkoa-Vz-6od2J5-MBZSrk8pg2N4yH3VNHITsL8UAjO8sKsJ7EzYljAML5a8yQPLnna95-vV5ht5n54alf4Vro91fKjgcejP048KhKVQ4s-ghug0Lf5iixC6OSjwyf1qQP3930quXsSD2L4OOmyQTVCWGAnJU5b705iO9Hud6lYQ3ojraIsQOp0tm46vKU_JBoZLWqQTyntvMa28eONKFqgSf7Iz-BBWG6xoZIFptiqBIvyHrFhBfgyYytLQ3l9DeA9vh3EpYDsCkvCfJR_nNUzkqXwXCF1aStGsLFjoP5oA0VgpOS9SCpQA69m8PKxHY_BQQJvBZPPfflskM1nVl_8pAGhg7YwqPtG3-XAiiIdVqJLbROP6vBdUb1Olpcn5gNBtJ8STbVWJhef78hJmlRezMFATXWPzN2uqvfMeRvy6_cVAb5IZnsDXquOtnVQnGdUYA7_k1q5gjEstDcUD1PAVDzbU57LdP_NknVHpK9Tji8eriZ2FikTDpaQOMHwZAZCUNDm-ja7lxKYDEJDEJuRrXBKfB_WmFosUBTndB_UF91cqqUKVmhYivDeY4Ls2filhFFLPrQKd0PcN1miIrZV9NKCcedRIbJYLUIXPssfYnMnKxf16HaLFPzUIKd2dOW8ibW2X4Uw6VL_6svkZJ0djRe9V3EsPwVQaQV9y3yWKirFwp2T3qOc62BUkOdpqnnZyQ2njrmHODIJn9iToha3Sug6LH91ZCCI88Jlp1qRl7mdvKuSoJSkBHo-tu3tHD4v64Jn3owj1aDSvm7mnyAJEmj4MLq27c_3iTTlOh6i4_BwCw9iSvMtbrmLrwPEv8TLa8OJRbl2tnkilugD1xdtvaeMvxLxI9tBffvlSCOCGY0aV_bPspsSInYfzjNF1xy8vI6QPjsfn9D9Dkxr3UkqLFolBS67ttHfxxGn1j8fSs5NL0X5RgpgPZ8n-jftUH8Qdz_7YIgGkqcbNd64pzNv1C_dpXbhso8roJ1BWk9iejZE0vtjgHNFTKqYs1utRJmte6E_ua6fXML3pGQBPwP0tEDpxC-ddGMhB_EkDKQm9I6KVBlKC23PeF6TivY3jjTXzLfJgUavRZKO94l1D3ULE87PxnKGHq4p2koHMg6Y_pMd_NGKXHYpLrHVEi_c77qkHvsHf109UhgEpRbkpSfAAg71chEwNByRajrLt4nkNepEwaxQ4Y8kjiOzdOC12WDIYE5DYW9Br7ITPsZ7_76zJrz-et-p0niNdENEQdTTArB99POtu3dp0i21dsH7Eg4cbcCuvUJ8Kzr37P9iIKZ-dlCz3yrK0Fzer4Db7Qt4qat1Rsi5mtSQ4RwZOhQ7BLOofeM-_XYGb40KgB5y7vikIQWXGFJGaBjkearfcXpp5yi4id910zul9Xsf5RnrJbcrGG5onExMeBJeLA8VrrFCTmyHwAFIMWPY_TaKcV8HwzA4xfMRoXpljbgeZws6_LQ1nxweJVKkOtOe0KS-Bpkj9TVte947WBF79QbVAVSAsE47n9oxoaK9H-cRV4Lpapy7KXmM0XDOB_FbOtDnkxI1dA64FzUNinwyaIRRWz5glTdDiyux1XbU9TKHLgt7NbG6vBlw88U9zbg1Jq6dZ-7JUyZGaxdfstb9ZN5PAh2FhJeYJdkKQMeTLyO_zVe2oeY7r_tAEoWaRbOITxK1twjD_M7p42Eg5BnwJ1L4zl-UhwaVvEHGtBA0HrZqGaYtzo2ADn8UImyV-SDZBKfXG1o0eaFCpng7giLG8fQ8eHUZ95i2h5apgmNfBUM5PbyDfs_iYhi7NGXgiwSdEgu3wcLRl8as2UTH-RS9Zwoj0UH61N2a6zOT4JntIqASuKuHC1IOWKIn0KJzQifDVKeDz7SKytjsNNfEX5h8qymn7lIZurnXB_YlQ8sAlJTTDC_9UGIZN0Jgdu0vg9C2gQGbY_tdRz0qdY4rGqGIulVbwiezWZmgwIpOjjsaaJi1F2WHdHV9y61oH9am2ZwxDaU3nf3cJQacCYhQRrwAJ0fLCjKiYWqkQIi_vZLA6z45ex76JHz9oGGtV9pNxsefpOBhTWTSykjBb9i7jZkmaTcUvcAIV5S-bU2OI04oz8Ha9EBAzM1SwQy5aUV0349UX27fe9a6iPOPr1jagKthfuESsMmN9Q1WWEwlVlyrmKs5dzzSJhz1CyDHhnN7pih_fp69sx2Na-MiN0Opl94ep6xaawMOGes4LEo-AB_P-AperEIc4AMqoDlIDJ44FPWC03WpjDXsY15vp5-n6KtqgmP72EfokvmptqO0pFafKg1flc5nb7hDBn-5Qon_ooUZOG0oHcptJAPYmmgUb581pj8oZkR-HFoIuCmLcQAZqPXDx4l6nDEmOHnhWNCJ6DqoLOzcyZL98hqEHX1tHKcMq11y-K07gBZSz-HOlrzJkdm4hw8piT_Xx-uT1fyA3nMdZbfpkdq5Ly5ZmDgRt4EI5v2WaK8GKS_VcXrdgrR3K5iZ3TB9zNEI9mZkhwiF3RCClKBbKfzGTGtGJYCvrIXN2orUToHw3I20ymFAEUuKMQj8I07lLg456lkH5SgAoaSYPV1zhLMbjrGNrDUqdZGH3ugyfjzWb3RAndMv-oGYhbGwKFKjev2IwDe1-nFoaSxH0BKr3wZwp9pr2cUs55pSLpnH7NVQyEDMaJOcizL6gY1n44nkXard8WSqAi998vitxoBoEjD-_ZWEVFcLTPdAMHHW89zIOWgaDH_qqa0JpfaMrtXOi2Gb16FIHzEAIJioh0VR7uUtTzu7oHE2Pxt_cbZarBu1256Xsjp1yGiy9iI0guU3PaxZ3jAfBUMH1z-DFdU5hW2tHdrWcaiGgokQcXU2SrH40QsBB9sXbV_NOIxOne3XgkJbpVwG1Gn8VdISCX5PDw9azkXjtNUUAaXWuM-rDPEMJdOIHDBf1Ndz3TKbdsbuU9BTU8a4EfKAW-2DE3fsagOcoryo3cVD6reLJjK1_2jSLpP3OBWpR04k8C_oXltaboBCM9jUOFTz9yiT5B54vg2aUoxTTw_I31gSliZLeMxwaXb7EYUb0Zp5ouldAd9qVrz-BkRGwqNWvEThgq1RtLvN5jUL3_dS3d-xzbS6icxv44Si2Rkk8PCg0YNagSzngUHoJHlOc2H1B2Os2unQZXJpOPpYAMcINEjmltGqBy4lEz8UWG3b6zrdwIskt-wCP4eu5KiVPgSyhd4sSP_Vb-bE0jdltTwnob3He6FoO5RDb45bGmfoOovWkcgyngti6E62aW4Nr6waXChNsQ_-VxfPjjgZZzMZFVS1kD1siyeDyV9h-Dw5sFxLNduP5VxUFYpUHUnoczrWaqp0N0ZGT9Z1qxu8mMNdSLFrS3WPRQf6nhOEehPHfsxwHjQIbI2TAU4gVia72RCaDrT4DdStmaSYfj2_dpYnhsRoNJUlTz3ZRJdYdu5sLTSwksLxz3hUy5KFf68tfEAg2gmpYZomqOgK1R79dbumEXqaqCiJmKxRR6TayiPgwGPGxemmWxeTlRV3KrFIfUeUHSCJ1q4kGsPzYRtvyV1PHX4p2IsKwvxD1t_O2ILYygILppT1GD3I83VKHezMWCRvyU6ote3f878dWYhNbqWYieWLDWf48l0u_GhEImIbPR_5hjnhbN6TlAjNRyPcASRCJRSd64C92uPNOVgzsnEKkFF-_Z6ZwzJvyCivzxarY9FtWBLKR6Nm2xJxtjodxDyETXMO5k6VkiSEqNBS1YpOZl9gbd3zGhaHFVV7eXGSo9f0E5pOqCVS9dvRhh41zBiqZ-DW16wiMUha9SOPUoR-X7D0c5id66B148-wLmvC4_sf4UbYSYoT3rn9asycLQiho4kkz71lSRY1TAlDgE1s9Ye-nmYy3MIMtexNcyIVIPf5iUl1fyOqoBUAZE58b4xHuNHNaTDW3ve0oA9OhgYWxXUYVNQ5L0F9vbX6iOGVQ2UfS3QKUgGUkv1uD9xHjJ_k6zyMrqlFO90jSNdTV8OeC3LbIu5jGW2DV8X1Dqof8CWKaiOA_gNp5MJiVp3Q7FvfVcvVvpncMQ0Km9URgSK20CMXNc6ZLNkM3cqjFk_TM8i_IxYcFaeNepUvEriR65snySPrYYSbaIqNEOXJbafp3VH_uN4OorOzM5LZ8V5oOuKVhtwYtLnAEP5DPsmePAmDF6HDcj0dSmxOSbI-D2DV8N3J0SvtNBsz86XAlpiWzDG8-0yYnfEcx_Ryr3aQc6Cb2DrYOPN49VTqNTiFs2LeeYY23OdtUrNGHs8HPqi1f9BWqSuH3-CYmr678iNK0e31KB48-P9b3Hr6xf_EMZkSmROt6kMz3KrAnwo14fKIvCrMALDqP6LJqNZ4WIOnTgWFnIK3oHiU7Ctla-8PzBU3UlT-kT5oEKbpfyPHizK1DMOzgCyL6iDi-jJ0sJ_0e6aq7VXH_nfeL9G7NIR6iD5geIFqbnXzEO5JLO28wRIUfoPgT1e67nOfBW5KtdQ-b8r_cFVvo6R_su8TxQVK6JmoNGhQdCeQKD0mcPjA12WuWRWOx8z9qAjcQJPuhK9bNX_RvnS9LWG49-Z4Md5luJ5TqWKkvGIxOIZrP_GjlkfXUvADTPb1qm6IqxqzDnSsyUHPiYe-8x74E8-hbNVfOqWwIvF1o1tKZAzQtdW-Fc1vehbOW3Xat3KJS8WwqSmyv0tWoGOJySJVsMUqd4aX2YnDTQPDMLP1J9KCMSjJN9CODsuS_YFJD-a-kj2tsSAMsTlIkXYwFeYFblPFD3tgi0nJj23E7fqAs3SHjbQBhIDmAUAwOPwmtCF0a4byr_T4DoNmglZR6axw2hcO6sBvAM-c4aQc0wkUf0cnKGZ2egmMk9VbHzfrTRDqgomyAYNKQWr9svyQdtRlO51EJTPtpgFg1L2dIjtXe_2rrPgDWnkRC7diBFeyfODRqSgCDqnlaa0EQyh7ZoEN8ZVBb4Vf8Zclu3X45ywWmqHZVgF1o2ypMvtsHF_5Jvw2zQ39qgWy_gAnX4LSUJdc3f4DvHV2YD8McaDzCxN6phG7HxfHGyhdRBOMl6DmtohP8N-53sIQezC3lXeVmZ33vQHbZ4RoNaQveKBlG92lKIEcXwIFpB0fOWweUGrpsd_P7FB7xnD5sinGPW4-BzlnervGo_BhT3kjO58sPDVmB4m3y0XmmiDe8947I6uPGaxnfWC-Zc2H9Pnn2tgcjL0PQps6OgrYCNYT6MQPiinlGMADTjKlN0eGkIjI6cVLR82X65eV7jdl7OXPoKbQ8jd0wF38BZI50yeGxLQ0bpyAyrz7kvqZPMYE72sOdKknQwaYPYqU9eRNxMsN4xdmVKHl4RCqL-hKRxX7u9dcpkt-_-24DBCXvOT3bOJjE9q82HaFBFMpyHgWI05cXzGL_DswNTZwW-ZIHIWtJrQNpTpEsWvIMKbD9ypKIgAuHtN29p6sZKmTLgYQQif8nNYqmfyGGqMobMKWCnmxOp6-l8poF5BNDrHb58QiBCsic2_VAA3w1ADg9HuABrnM_lJm1UzVZx3vvvP8oxSJvmu7I7h1Xkt1Srwf1IfgCy_Usxz5U49n5sR4onN6x0Y9KVKGbI3oMwgxiXMkVOTUqw-qRHVwpYi8Rw10oVE-AWrVsQLI1d3Q-CuDtPGlscvN1iOtDBhjGOdaG2CjT31uIdWS559LYvjL7k7j3ujs8eyzw2vnUK-KUKCDbuA94v9iKMboXlZ2vBUp7oQ4z6cBMdyh1fA48lpO5Qp4EUh4zaxqng5FUuJwyl5hK-6U3WkciDPxpBb6pOfa950x7Bpo6EBDwqYivnuyHOs_vMhqlgzhuOZgIo6TF9JHYjp1XTbQPoRwi722BMaggTAC4Ixl4ONUpax3_c89HkSswspJzYcCw6tig7RXMQDH5QIuzrQoF2Jj-058djujqP_ku57fq8iNKv_4hvZErmYAfxEDt8Ge9G9oScqddpzDMBCyHnB8OvhQiWyR2CGRm7Lf_U-x_AmIjqf2scYZSqF-WCW-l1uy-i-r7XBUnDVUQ_WoJ4dHwfbAZoVFqPyzpZLmCCDlBSG3FkjCyj9DyO0_-jIVxSsPjOQxcEszCkyD4plTMNtFiScmZiKganWU7T5P22yNaiWAaQ4OJwZwoO312fydjslBW2eyHUxOebuXY3Vn3EJ2JuEbPFQoYrdcFSqC91ZR7s1f6CpSY_sIjjAyBND-fTAVmJW3jyBFvlv21JUEkZN6xxZx03WZkWkt3RzJy_vWFMeu5jAyEY3lKroOI5GVp3GM0l_s4lM4vK8YPvEaxCB45zGGjyam9KbwjwfvBsZCdlvoB0fV5LFclObUT0kSd9ylSgnmXHEfShXpYIuY799BMzMdZe8FO8kv_WY7FBche_4Fxy2ZFtdUbnrzjC9GBjO_W329hziMWHxZKhJv0gOOfykpBToq048ROpiEKitYrcQdDUJhLt7JLY7Ce-6uVrZPyYmOA0SKniTHftKxyGV_1f_AkF5CD66orKvApvq_nLRZajtdxMkd4XzbrrxYEcGVdtNVTAtTjjQt7pV_GnBv22I7sIcA-VzOhuDcW7RVU2_eKgUJ8a2ul4bZyHWSw8fphJx6lXJ5rlXOD8KPiG2PKIFzMnbgJQByo11ja8L67ynRlmZsPMXA4Ej-w5dV41BJ9ngNsLqINNpFBr4ugDl0b3a8SfybYMH6rxfgJ-GhPYdzWbVywER1-d6qodEchEUICoAhbKTaoK74Gy4F75zAMyFh2_yiQxSrnDwP9RjmTa7Uzwx9XNtoA0wtjSPJcie3_-yEwj3Ah5yF_b5ZAd9YxuA14qcm0ImKTHXQmEy83T3oZw1gBmbvMTSzdSLwexxmCA6Wwc-lFo-e_yVFmez3HRCUassreKHzBTa2EgH1cMUKwRQAiZjVseWu-fjDdgVUJKQNgedZjKkeizwT8ubL9Rls_xtm6JQLfmBEGA3WtPAyjPAb5lIuS3bR2b9BSZgmiC0vbVervA0r11nTUBo5CZ6PLOI9BbjOyhVOaHE8KoAlF1IKA5fhS1u0ZOVOK_stmdZqX_3_jcvZyurjzIubSmyfFFsRQ_RDJSRBjb9GfmHggYpChURHYj5lKz3X-LN3juICICH8UukVa9ENSVejyy8MPVcEBDPwg9GJeBpyZBO_J7yhi6-COguMwSCtYK6Amp0y0r5zpejOYSbIRMrFpCS7Rb4i5Y-qjM6Pf7diHZGXufPJ0P6cTH1GL7DX8yEslWl0KBbDQZiuqugMF3w0533LHLAIB60BaLBaM4XZ6jeoqSXAQU9ll7XmNit_JpEb7vx6iec7Uqs3xyavOjpnRbqIQ1tDwkdnl-elRmiEnsorWsp7x1fUe76Hnk6fuITaSOVa0_W5EjiX8bEUh5gMheHGAHK6N5-y1U-x_f4KxlpTaWtdl_4INmu9y6fsZ5bfS9W5UDC5Wf6K95bmroNk-vExpR4RQd1Ey9H3PGFrTdSS6IB7KncXcAsMdt7iOQPU1brxiE4yFG-R7c7Llt2Valej-dGWCy_DVGuM10geK2LMYlPeO4HotgU8RnLN0DBBiuWAmX1AeBpGovKXtct_WB6UhpePcL3HYMX38A2l4NADorqPAM_49V7372UtnwYFNuxg7xwcx32CL7ZSvyOmUSyU2meK9dO1fZ2mpfE76og9v2uc1d3rFJ4-Afw541jQC02ApEyEHHnb8nrejOSDoAmW_gsaKJKHJZdUxqx7_4y5veEZih9Hk0P0VpGwlx8BAgRN690Gquk8o79z8xnS7HJ6qV9AYLyavIL0GBug6kXPUWAWUQtgDZx6ia0tAfyi7rra6d7LLzSJcV3y9rJif36FM66zRJ96LtRzPJPVGjdDVPtvUI4h_Ko2B42I2410HLu-FzwyAVGxdUeM3Sbv0urwnDjd__b2N-0-PFMHbB7mbBYsVu0IummCgqhI2hCdl8e8lgDxc6gPg5kj9P_yxPEHJCouqZpqRAJDJkFxXIQMdq2FYl3ZVqATNhbYmp31MXNJDhjKEZZaCi5KetArJpQFUmkdgrVkOtF7OYH4VYMyqEWY2nlex2jQgqXqxn-DddB8JoPaWZA-Rn0xC4xd8OnkuUHRDFgM_FjMGlsJ1I5g839tsugJsYyN1YICjw7j6s502HcCufLeJHWTzFOigayux7I2lNLWG9VbylvgcvW_7LBip0o2Qa8aq0kDB1l2e92deiIDYiGvdt_gIA4iBZE1WbZB_pNg-jEYNkJZwwGd5MJWknz0f3G6gggEkInwFZPCIwty7jyvPoDOkuM4BAicQRANQ8oPCpl0EngiGmjkcyJ46WkfzxMpPjNFSg2UjbhqTRLwMFOyLGwHYftY6hrTNPOl-TFRjpt3lXTil3_cWAI-5gVToYQthCoUTt1acVq5Ggu00xU7qz7mzZoFX5K78Nek4TwWpM0rMC60xAYkkuFZMB-mzBcE1_hsKuvMR_Xwt-cK2xDex44fm44T0ybIUn7Hr6PAITCbvKVHsG04C22cDqHDnYJ8SnxlqC5uiC_BD-FNBiZ26RaNKHE7E8b87OI1fk0qJQAY5WVtUdhCKl2y_YQJwOo_rrBJDTGiwmScQdCSLzLReFiGUvgYsVN1nf65RA6jGrv0QJHn6EadaoZjkQLwAVl1T9dc7g-6GVWsZoWGClyUH2zM03o_xzssHR40NRNmFGthOe3VH7ggij5mpXTlUdvbpsPul3ZBPOTTKUPFAk1_15yCHn1uuvqjzGV0aw1p20oT6gzpmT-PpgxDTtxZ_QU9q6ya9V-JCtzNzZZ8qHKp_c-Xmyvk0CCq3M6GISfDrxR9wcajASQQEOrw2b-YOMQmpJOYnSeD2VaqOvdgOlQT5Z-tNTQTWMr3Zvd0BjgG3SaLmQ4DST6tw9O-X4cu-wz0czoHpuBb6vPGco1cgJAKadMGaGvdwF9fCnWTzZr4DzpqjHRGp4T5_Js2fgCZRifOQwsgvG2D0zq8m6yZMg3VfaU8IP7Bq3QevuaAqTomb-ScVUz3izExvzOZbajvqJiaG12UAG-lvjsVS_ptTwtweUmzCNwwNxvD-Cm5jVacQ50_q64SigSajhfhEM7booWUfeHVyebD1wUQkGPskUPxpgfGTHyyhQDa7xqNuVNjuLPdoVzY5tZksLbvAa7EOMhZZKXhAmYhUrNWpzZh6JjvmccKQaxIC4cxgT4a7VnQnGAnWs9pgQ2511aj9gxXTI7EXJBZ0ts4SypT26c8JD658R-pK6y1NKjc2Bk78qyNOOBQmqguqpuugEfXwlyoJVJ-i_jGHwYKCc3lJiVIveDox-J3DdhEobCRmrRiYy9SyW7-f0xsV_eweTFE6K8rlrG6wFtZaBdpoP20Y92b3gnLXLxJv0RLymRjYilc9lN_H0E-fmo74c=",
    "openai-sentinel-proof-token": "gAAAAABWzE0ODUsIk1vbiBOb3YgMDQgMjAyNCAxNTo1MDoyMiBHTVQrMDMzMCAoSXJhbiBTdGFuZGFyZCBUaW1lKSIsNDI5NDcwNTE1Miw4OSwiTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDYuMDsgTmV4dXMgNSBCdWlsZC9NUkE1OE4pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMzAuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYiLCJodHRwczovL3RjcjlpLmNoYXQub3BlbmFpLmNvbS92Mi84RTNDRUQ3Ri1GNUVBLTQzRDAtQTVDMy03NDVEMjlGRENGQkMvYXBpLmpzIiwicHJvZC1jZDJlZjFlNjczNjA1NWI0NTlhYzhhYTRlZmI3ZGM5ODhkZTFhZGNhIiwiZW4tVVMiLCJlbi1VUyxlbixmYSIsNTksImxhbmd1YWdl4oiSZW4tVVMiLCJsb2NhdGlvbiIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsMTExMjcuOTAwMDAwMDk1MzY3LCI4YjhiMGZlNS05YTQ1LTQ3ZjQtYTk5My0xNTQyZWRlOGM3ODIiLCIiLDhd",
    "openai-sentinel-turnstile-token": "QxAYBR0KAwwIEXtgWVZyX39nc1sMcW9FVHt6SXt3e3NnVhEUEBwGHQkFDAgRbXd0U2JTc216Yn5geQNff2F7eHt+Xmhwa0BKTHphX3RvY3FpemhjdX5jb1ZleX94cVsMdm9wZnR1eGNxfmNafHJ5e2VwcUt0b3MLc3pJDw4aHgwFAhYKGhAJGn1qd0Z3ZncPERQQFgIdCgsMCBFuA2B6ewlWfGRUclZ7XnZcZh54d2tKH3NrYHhgYFhiBHtZR0JmeHRka3d0fmVWZHZqZUhqf2pLWmp4dFVvZFp2ZQh3e2pmAVBmdF97akV3UG5eH0RhCFZ/UXYBUXZkAnlTQkZybwMbYmQJB0pjdAlXeV4CW2VDaFFrXkpiZVZCTXpYfmZ5WldsakV4cn4DH2JkQEp0Y18NcGZ0cWxqeXRkYGRWRGVTZHRqdglqeAAGXGAfdGRcA1ZYa250fGpYS1ZvY1R5dUYKd3lgFlFxegt2ZwNbVntZW3tqfANib2dkQGBTfHxjdkxwTVlEXVR5aEpadWhcV29KHlRkCUhIAFdQV0ADW11qeEBRYEIcaF5MVUhqXxNReXRdXABsQFFvZ2N6WAlXeV4CW2VGC2JuAmxRZQkLdGBYTGVmWUdgZntwZGxwG3BmCV12ZwINcX9wV1tjdnx0bHReBWJuaGVUA0xwf3RfbmEddFBsZFZTe1R4T3FbDH5sRQt/dX98Ynlje2txaWd7Y2ZMZn9kR1lzaHx7bHdsemZ9aGNlA35Rf3BlemEeaHttZFZ4YmoLXGheAV93enUJUXYHC10BYFtRb3BdVGtASEp6AkxUeWhKXVwbQFFgQhYQHxoDGBwEChAUEH5sWVt8WXUPDB4RAQAAAgUaCAxjS3pla3NYcXpJSn99Y2dwdF97SHVYbnp4WVdpd2xjd3pgd3Z7T3NpcXJ1VGxVUHVzRlF3e0p/Y2FUVk9qAkhTa3NYcnBZe2JqA0pxd3lVb3ZycXFrd3VqZHtodH1jZ3Z0ekVtcWJ5UG9VenJwRl10eUVrdnVQBnxlXwlTfF5LbndsY3F6VR5Xd34HeWpYYX9tc31+EAIQBQocFwQRAhB0dQZ3ZkJ4AGhmHg8RFBAdBx0MCwwIEXlzb3NyeXNvc3J5c29zcnlzb3NyeXNvcxEUEBkcBgsQFAIdDgQaAQEAAR0CBA8LHgUKCx4MCgsWCh0QCRpxf3cOGh4MBR0PBQwIEWFKb1RxaXt5c3FPUW9VWH9zb39we1pvcWt9aHtqVHJRfF5hXXNGc3J8YFlXcl9jfnNUT1drY0B5c29Bf3lzb1d2fwYTEE4=",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-arch": "\"\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"130.0.6723.92\"",
    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"130.0.6723.92\", \"Google Chrome\";v=\"130.0.6723.92\", \"Not?A_Brand\";v=\"99.0.0.0\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-model": "\"Nexus 5\"",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-ch-ua-platform-version": "\"6.0\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "__Host-next-auth.csrf-token=0da98efe55df37e204e79d83fea3e2f35fa757801da876f54e592d65b8618171%7C40b75145c4cedca99dd11725038b694413ee855dd6c797f7861ac39da99379a7; oai-did=442642f6-d219-4377-95a8-38b477dfb45e; oai-nav-state=1; conv_key=\"IQKXSkDofuSJmRUgXppUqAO3VmMfNrK6ZX1-HGGm1QM=\"; __Secure-next-auth.callback-url=https%3A%2F%2Fchat-identity-edge-onramp.unified-6.api.openai.com; oai-hlib=true; _uasid=\"Z0FBQUFBQm5LTGRZU3lRaGk0SWp4bWU5Zk9EejlLckFsakpiOHVwSVZZVjhRVkYtdzJiSkN0dzZiNkVzRXRJV0dPb1FFa0JPWWZDWnBDaXkyZGN5VVU3aDVha3hlbnFXSlZaZGMyOW1yNVd6QjFqa2w3Uzdka2RLbDA4Z2RSZDRVVGtDZHhUYVpzanRFRWtWRzJHV2d3NUhnZFhkNjNValJWWGRXal9xV2FMR1MxTHViMDRuN3pCS3QxcGFlMEtuMUVZcjRvUjNrUExlVUJZNFVQaWdpMGIxVklEdTk0N1NUR2FsN2MxWTRBTjlIamxMc09GMTNwQzBuaWVwcEt5NUpLMEN6VWNSdm0wRUhOLW5UcDRZZVh5eGhVT1ZpUEVOM0ZZOG5tQlpSb1BvanJqaDZHYVdfbXJYc0dJWl9oQVRjYnAxeWU1UWpHT1IzYTZpSlJKbTdUMlFuYnQ1X3NqakxRPT0=\"; _umsid=\"Z0FBQUFBQm5LTGRZVk1Zd1hJa1MxNXpWcnRkQjItX3prYTBGMjgzY1E2YlFRWC0wdXlrZ3o4OGZWbmpVc2NZSVhnVHRVcVdIRlltMzlyX3I1S1l6eHVoZEpfQkluT0xEZ1gySGV0alJHd3FVWGVReEExTTMwcGowS00wa056c0VMcTJIWnhBal96MVhQdXBHZE5EZGNicjV2d3VVUEdnNlZmejc2c2tKZmxmVl9ZanMzQjdPYUdKZ0Noa0ZTbnR6NXpVWDNxeTUtM1pGVGNPeXNOeVlLR3Q5aTJUWFNaX3ZLTEgwdWl2STRYM3YwbllCNDRqcWhfND0=\"; cf_chl_rc_m=4; __cf_bm=QFZrCwsou0AqM2GNEB7_cOqu8cD5lnZOp6iRkcv4Ymo-1730722810-1.0.1.1-SIQ3wWx0f6m_OsSUYfYEuNMXe1Smgr1eFS_9__h.fZwVv_ubxJZ2ZPp5FDupeDTMqYJj8S1nWWYbtKP.kA9XDQ; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..l-hTbGfaLAG4E1hW.5x0CkaZVEYCjHf6DfjXA-5a_fngJHz1pIIhRkyltYjneeGhQX9Fiy4AdnfMbelUYNYsvfWerlYj13dDTmmjHoLNMUPccWoHzmKbnepf5bv-qV96fYJO9c1txvFX-d7BEAfRtssOQ7I8K08WSPIwk3FGwZ5vmQqWCpzKRC8QfNxEM4UNGK00OR0LjoczlXmoSM21_Jcvcmaot8o7dQP18tZ4-MHPwzpVGxLtuaz1-04QBxpzKaMjYSFPshd2vEdWWmFjvQbzQX114c6k1DrSufvi7a1lwYOqwAmp1o1IxarT-l2RJZLhBmbAPJuOCF3mOnKbMw45WaCSSmbEuG3ABo58hXlseMpc28H0MeVimF4quq_XFeDHprqu33ybzriYiubdTVnBP5P2kbS7sSx6-smR8bYEP_AUEGtipFJ-b1MFLVvp98gd1LjvOJcDB2zb7ZvROAq7YSeZ_Z8xMfyWF56fL9iQ9jZzMW_oeJ7YLXHBObzoz2NdTcDgU6BQCL0zrt1REaIchj6K7N30y3PFBI5geWSA3aGdWxA0QPCQKgYE-KPr5JukSysOU3Oh1gUZDesaz92YnOru8os9VQxn-2-1cSQaZMJsY2PwEcfcgwIYvcnNMzEnAE5RdkQ22TPZBwj192HgFNOnAyzOcvwUKpVmmF6y5I8B3phkErIC1P9MQ1kbvbQXF79SaFw8KDjyVPuyBkG9OHAECkQLYp6YKU9XnXGwyEcBaHA2ooLV48YfV4PCz1n6Qwkv2lDLadWoa3tUP5iwXp9f2QrmvaTPVimyPOY0Gy8yFLvCEsdQ0wjgSmtSqlODwYYEUg0TArxkFHdJrIE2UJtX3Qz5Q9zEwEF8Jo-o9eMAM5Ck6fYnTV74flohdFQdJ-f97-jbI2M64xAb3k8LZJEkZsCggC2yVAM1vizBI2afnr6RytIjw5dgXsbW2Fk0oyMl8h1uaJ1THyClsfA1Fg0-pV7VUvFInNJsr87fGOAPONJtfTvNA0gkaB0sQInZYAnX7IFCmkXfIhjW07cO7fiBE0uKvuYE9131XUbDEqYslFISBy8a8qqXj2jhIav4jEBXhzPJ4isEepk5EGImZZkUznTkQNkaj9ZKGEmY6Ikpv51AvVE6_uXFs9MICLxH7cwDbqmlBa14PGFnfPsduMn6TdZ9BJGv7udMi1IaFkqTu2Jy8beBX4N-ZULaAR5dWXv1D4vF-vW6LG4P4je4a_zPOHQ5_DAaIEDL9hzfDkkAGoIym825M8InJf2nlJhgtcmvA1EvNkH9RDZUYYY8o8ZgXD7nduNq16_od4hP73SfUwV8cjzMqVw4uUlazuM2MsM--OvuzuPIGTtdBGJRh8GwLbQEkK5ufJLwhke3wkjmrUC39Br976XSXNsBbWi12XcRwovYQg2TL75rmYWGWvb6hrETA9joyoJvu8NQpkW2Z5GdCv0vRNX3UGIq21-NfYCUlmUD3L1eAyUl5p47g-tDLppTmJPLpbxMVHAOvRw60YnJVdZvP7s6-faOnUbJgiaF--rSqom4jzlQrafOncANUKn284JZ2P3PU78uZXdgbhrX2SB7jMh94rks8b7atzDQo13AA4A_PZ30sADK3nnFhjF3sKvot-M4IZOzPBNmG6KjnvjKidchBBICBEGZGtOw1R9qzr-AJGjo1OaR968dJuAA2xScyELkNL8pi0zzh978hlISYwo_K9fED4aAiR6FqggP8kHM5IusD8JrSTkAskoH86bQ2l10T34LuGp1CRAwAZ1Ug95CDvkmdxtNMOe3VO_oSodsntoVgUI8Fma9cHOyTEi7LGTWkbUQdDfF-T2niRrpETDXZFyYTt2kojcPHjd93rxWYHkUnD2wj3ldTqTW8zsVznW9wSpLfELXYbqpqleq6att6f8NY0Pn9wQOsHxl3ydQgE4-xDrDNGYDIWJ9onW2yEaM3DJQZ39wYgI1zbB9I8iQjKmJLm4ndyCz0rrPb-kyYX8sSIlENP4omlMZX2UxNSBJPY4mPL4skGOBjwmQjVzwjdF4m8-x2L2CEYfItSl4D40ctIy7KwIXPaKE_40pSUH6_CjI0sUqsC-8dilUlQjdMpY7MmdVzxP4-NFS9HLtNPVj9T3Fc2sa4_59AW9Lvr-MClAkhzIF-Ka9X2W8F1NTD7TXY7DBo1nNGJxwDfSwoDkgQpOU4bIuMIZxjD0Is2MjpSpG7W449gPVeJpvj_p1g3Em424WHSEHb678c6n8RiXMuQopZtZhtnSTlwDxaoyocV6tqpo5ncQbug5uoE2Sk6PIyMxBZeWijZRWNmQYCPea8sIDI1-4CJ9FiEWrUb7SytWx8n0sAhgQ1jsZKY2PAyfSh9SUwYSGlA5zrqWa9e8lOvs1Q1ZM0v_oS3ihdj7tNc2ykrclF-O7BHFyTNWJtExCrRX2bgce0xQEpgrnzJeZpWhP6WoawZJT5xw4HGVA0Kqprv4KJ-kX2mbIQzJL3PbZXQR7DAu5xCbsmLQMvi096ubgkCgyQ-4N0HeFOeejDVMWrMzu5EKCsJabZWRcPaBLlD2xzjbzQfd3X7QUN_s5HcCXfvlBt182d2Nc10JyBZ0ctbNQIYJ31IgSVaB7RO-F5ZIMw-_lim9fvFVEGI6FpZ471IC35BXw7Ua7diBhRa87GmWQ_dhMKsvbUfQs5BcND4rY3RVE59wOCzCHC6g_adWgbeaGEXYEO6d7LRBi-wXPymHGsC6yAfNKE5htXi8bziZSLLUJBuEc3cJ7nU07wAKys7lYX9mio6SX1xZI1EZ5BUIgmLzqEHhTBKypMxMDPeTeYbzdB-G191ft4UbSiUd00GAK0YMyRefpIrqkgDzLR60hBM0GQbpXCZiACrfw3O6IAuYhhg0DnUx2eWfBhoNIFONjDvLHL_9V_OoGIthg0kQsdz6omR2mPiso355wIaTKcZMRWFobEgzpupWJ_RAlEoB-kHj5cFap07ALG1j1IRNnHfcxlGX5ngciCZA0rNHelhA-iLuMdCY0c3ftB49nh94BM9gAbC6157hul3s7luYm3rRBNryXOFucy9q-JuW9SWy2Kr5kKkw2-_y0.sRUOs00tYJ7AEoucrXTtMQ; __cflb=0H28vzvP5FJafnkHxj4GQsQCJmEZYHym6MDaa412Ctm; _cfuvid=Ov0X2qVLyVSRjgZY7NsuWP5UPbit1G.yprPQ1e4oSfo-1730722811705-0.0.1.1-604800000; cf_clearance=RZ2ql.mkl392cnNkXhLiMFHCreIZT6hXb43yd2h8CDE-1730722815-1.2.1.1-Os4r8wLi2iybUAYKBPPF5k8KeX_hZh6cSXIb0rPYMKuI.gU7d4dDC_FQs4UovV1sIHft2HogwVbbKo5tIh83dam.G7nvmG4zy3pChGppXhBlTZGiKOyoXm0uh7h25sYxn4yP.roPah8xlZdBWrQZe3X4Bl3wz8h5_zOxJPhL4qY7Mj22WnpePB.sX62AZ9iuwXXxh1ytbO87D4JVyE7GJa_0jlM6s3mv5c4jsGImRWI36j7iLyoQ5u1yyYE2LAWSJXH0KGCYa9R88xApU6Xitq1l8SqXHaqXnKOD84Ll9h3hN0X1V2S4psUDjK.Y25WiSQv419D_ocIk33Uo0krQG_usHAt.S7E7A_XhqMKEqhiXY5hoM7doG74ijvscgUtDNDbErrhs1GWgAOgMqvGWl6IPhQYh.EmESlJEEm48Xa6CESxRiZUm6f_QY_Bx3BdzzfCAmdxtypW6D59PtFqT_A; _dd_s=rum=0&expire=1730723794507&logs=1&id=acaebdd2-25b8-4c83-9950-7452b140b025&created=1730720323415",
    "Referer": "https://chatgpt.com/c/6728b2f6-23f0-8013-97f2-9c2126573780",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"action\":\"next\",\"messages\":[{\"id\":\"aaa2fbad-4567-43e3-be22-9ec01dcc0cf2\",\"author\":{\"role\":\"user\"},\"content\":{\"content_type\":\"text\",\"parts\":[\"اسمت چی چیه\"]},\"metadata\":{\"serialization_metadata\":{\"custom_symbol_offsets\":[]}},\"create_time\":1730722894.511}],\"conversation_id\":\"6728b2f6-23f0-8013-97f2-9c2126573780\",\"parent_message_id\":\"4b453fc7-6154-48cb-9ada-b7cb69e65c47\",\"model\":\"auto\",\"timezone_offset_min\":-210,\"timezone\":\"Asia/Tehran\",\"suggestions\":[],\"history_and_training_disabled\":false,\"conversation_mode\":{\"kind\":\"primary_assistant\",\"plugin_ids\":null},\"force_paragen\":false,\"force_paragen_model_slug\":\"\",\"force_rate_limit\":false,\"reset_rate_limits\":false,\"websocket_request_id\":\"4d601f82-197c-4371-a24b-8d9b31158c66\",\"system_hints\":[],\"force_use_sse\":true,\"supported_encodings\":[\"v1\"],\"conversation_origin\":null,\"client_contextual_info\":{\"is_dark_mode\":true,\"time_since_loaded\":83,\"page_height\":340,\"page_width\":1146,\"pixel_ratio\":2.0000000298023224,\"screen_height\":340,\"screen_width\":1145},\"paragen_stream_type_override\":null,\"paragen_cot_summary_display_override\":\"allow\",\"supports_buffering\":true}",
  "method": "POST",
  "type": "stream"
}).then(async res => {
  const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            console.log("Stream complete");
            break;
        }

        // Decode and process the chunk
        const chunk = decoder.decode(value, { stream: true });
        console.log("Received chunk:", chunk);
    }
})