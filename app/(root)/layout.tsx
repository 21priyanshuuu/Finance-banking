import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "123",
    email: "adrian.jsm@example.com",
    userId: "adrianjsm",
    dwollaCustomerUrl: "https://example.com/dwolla/customer/123",
    dwollaCustomerId: "123",
    firstName: "Adrian",
    lastName: "JSM",
    address1: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    dateOfBirth: "01-01-1980",
    ssn: "123-45-6789",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Uncomment and use Sidebar if needed */}
      <Sidebar user={loggedIn} />

      <div className="flex flex-grow flex-col">
        <div className="root-layout flex items-center justify-between p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNav user={loggedIn} />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
}
