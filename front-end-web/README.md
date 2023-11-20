const formValidationSchema = zod.object({
  clientName: zod.string().min(1, 'Insira um nome valido'),
})

type ReceitaBrancaFormData = zod.infer<typeof formValidationSchema>

interface ReceitaBranca {
  clientName: string
}

  const { handleSubmit } = useForm<ReceitaBrancaFormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      clientName: '',
    },
  })

  function handleNewReceita(data: ReceitaBrancaFormData) {
    const newReceitaBranca: ReceitaBranca = {
      clientName: data.clientName,
    }

    setFormData(newReceitaBranca)
  }
