'use client'
import { Search, Trash2, MessageSquare, Paperclip } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useState } from 'react'

interface Action {
  id: string;
  title: string;
  messages: number;
  attachments: number;
  avatars: number;
}

const NotificationsPage = () => {
  const initialActionsData: Action[] = [
    {
      id: "visa1",
      title: "Rellenar formulario IMM",
      messages: 0,
      attachments: 1,
      avatars: 1
    },
    {
      id: "visa2",
      title: "Revisión de formulario IMM y Visa",
      messages: 1,
      attachments: 2,
      avatars: 2
    },
    {
      id: "visa3",
      title: "Aprobación de tu visa",
      messages: 0,
      attachments: 1,
      avatars: 1
    }
  ];

  const updatesData = [
    {
      text: "Recibiste un correo electrónico con instrucciones",
      date: "8:51 AM"
    },
    {
      text: "Tus documentos han sido revisados con éxito",
      date: "20/07/24"
    },
    {
      text: "Acciones necesarias: renombrar documentos",
      date: "09/06/24"
    },
    {
      text: "Acciones necesarias: Pago del trámite de solicitud de Visa",
      date: "17/05/24"
    },
    {
      text: "Acciones necesarias: Pago de biométricos",
      date: "08/03/24"
    },
    {
      text: "Tienes un nuevo mensaje de Larissa Castelluber",
      date: "06/12/23"
    },
    {
      text: "Larissa Castelluber agendó una cita",
      date: "25/09/23"
    },
    {
      text: "Completa los datos de tu perfil",
      date: "09/09/23"
    }
  ];
  const [actions, setActions] = useState<Action[]>(initialActionsData);

  const handleActionClick = (id: string) => {
    setActions(actions.filter(action => action.id !== id));
  };
    return (
      <div className="p-6 bg-gray-100 min-h-screen ">
      <h1 className="text-2xl mb-6">Notifications</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Actions to check */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-base font-medium px-4 py-2 bg-primary-gray text-white">
            Actions to check
          </h2>
          
          <div className="p-4 space-y-6 ">
            <div className="space-y-4">
              {actions.map((action) => (
                <div key={action.id} className="flex items-start space-x-4">
                  <Checkbox 
                    id={action.id} 
                    className="mt-1" 
                    onCheckedChange={() => handleActionClick(action.id)}
                  />
                  <div className="flex-1 space-y-1">
                    <label htmlFor={action.id} className="font-medium text-sm">
                      {action.title}
                    </label>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        <span>{action.messages}</span>
                      </div>
                      <div className="flex items-center">
                        <Paperclip className="w-3 h-3 mr-1" />
                        <span>{action.attachments}</span>
                      </div>
                      <div className="flex -space-x-1">
                        {Array.from({ length: action.avatars }).map((_, index) => (
                          <Avatar key={index} className="w-5 h-5 border-2 border-white">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>UN</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {actions.length === 0 && (
              <div className="text-center text-gray-500">
                No actions to check
              </div>
            )}

          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-lg shadow overflow-hidden pb-20">
          <h2 className="text-base font-medium px-4 py-2 bg-primary-gray text-white">
            Actualizaciones
          </h2>

          <div className="p-4 space-y-4">
            <div className="flex space-x-2">
              <Input 
                placeholder="Buscar..." 
                className="flex-1 text-sm"
              />
              <Button variant="ghost" size="icon" className="shrink-0">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-3">
              {updatesData.map((update, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`notification-${index}`} className="mt-1" />
                  <div className="flex-1 flex justify-between items-start">
                    <label htmlFor={`notification-${index}`} className="text-sm">
                      {update.text}
                    </label>
                    <span className="text-xs text-gray-500 ml-2 shrink-0">
                      {update.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  };
  
export default NotificationsPage;