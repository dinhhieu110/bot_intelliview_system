'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import FormFieldCustom from './FormField';
import { useRouter } from 'next/navigation';

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);
  const isSignIn = type === 'sign-in';
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-in') {
        toast.success('Sign in successfully!');
        router.push('/');
      } else {
        toast.success('Account created successfully!');
        router.push('/sign-in');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  }

  return (
    <div className="card-border lg:min-w[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">BotInterview</h2>
        </div>
        <h3>Practice job interview with AI</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full mt-4 form"
          >
            {!isSignIn && (
              <FormFieldCustom
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your name"
              />
            )}
            <FormFieldCustom
              control={form.control}
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
            />
            <FormFieldCustom
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button className="btn" type="submit">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
          <p className="text-center">
            {isSignIn ? 'No account yet?' : 'Already have an account?'}
            <Link
              href={isSignIn ? '/sign-up' : '/sign-in'}
              className="font-bold text-user-primary ml-1"
            >
              {isSignIn ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
