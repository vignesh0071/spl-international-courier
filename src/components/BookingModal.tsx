import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MapPin, AlertCircle, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_CONFIG } from '../config/constants';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDestination?: string;
  preselectedRequirement?: string;
}

interface FormData {
  // 1. Shipment Details
  pickupLocation: string;
  destination: string;
  shipmentType: string;
  estimatedWeight: string;
  // 2. Sender Contact Details
  senderName: string;
  mobile: string;
  email: string;
  senderAddress: string;
  // 3. Receiver Details
  receiverName: string;
  receiverMobile: string;
  receiverAddress: string;
  // 4. Optional Message
  additionalRequirements: string;
}

interface FormErrors {
  pickupLocation?: string;
  destination?: string;
  shipmentType?: string;
  estimatedWeight?: string;
  senderName?: string;
  mobile?: string;
  email?: string;
  senderAddress?: string;
  receiverName?: string;
  receiverMobile?: string;
  receiverAddress?: string;
}

const SHIPMENT_TYPES = [
  "Document",
  "Domestic Parcel",
  "International Parcel",
  "Commercial Shipment",
  "Other"
];

const WEIGHT_OPTIONS = [
  "Under 0.5 kg (Document / Letter)",
  "0.5 kg - 2 kg (Small Parcel)",
  "2 kg - 5 kg (Medium Parcel)",
  "5 kg - 20 kg (Heavy Box)",
  "20 kg - 50 kg (Commercial Freight)",
  "50+ kg (Pallet / Bulk Cargo)",
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedDestination,
  preselectedRequirement,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const initialFormData: FormData = {
    pickupLocation: 'Thoothukudi, Tamil Nadu',
    destination: preselectedDestination || '',
    shipmentType: preselectedService || 'International Parcel',
    estimatedWeight: '0.5 kg - 2 kg (Small Parcel)',
    senderName: '',
    mobile: '',
    email: '',
    senderAddress: '',
    receiverName: '',
    receiverMobile: '',
    receiverAddress: '',
    additionalRequirements: preselectedRequirement || '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [generatedMessage, setGeneratedMessage] = useState('');

  // Lock background scroll and sync preselected service when modal opens
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      if (preselectedService || preselectedDestination || preselectedRequirement) {
        setFormData((prev) => ({
          ...prev,
          shipmentType: preselectedService || prev.shipmentType,
          destination: preselectedDestination || prev.destination,
          additionalRequirements: preselectedRequirement || prev.additionalRequirements,
        }));
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      setIsSubmitted(false);
      setErrors({});
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, preselectedService, preselectedDestination, preselectedRequirement]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let firstInvalidId = '';

    // 1. Pickup Location
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please enter pickup location';
      if (!firstInvalidId) firstInvalidId = 'field-pickupLocation';
    }

    // 2. Destination
    if (!formData.destination.trim()) {
      newErrors.destination = 'Please enter delivery city, country, or pincode';
      if (!firstInvalidId) firstInvalidId = 'field-destination';
    }

    // 3. Shipment Type
    if (!formData.shipmentType.trim()) {
      newErrors.shipmentType = 'Please select shipment type';
      if (!firstInvalidId) firstInvalidId = 'field-shipmentType';
    }

    // 4. Estimated Weight
    if (!formData.estimatedWeight.trim()) {
      newErrors.estimatedWeight = 'Please select estimated weight';
      if (!firstInvalidId) firstInvalidId = 'field-estimatedWeight';
    }

    // 5. Sender Name
    if (!formData.senderName.trim()) {
      newErrors.senderName = 'Please enter sender name';
      if (!firstInvalidId) firstInvalidId = 'field-senderName';
    }

    // 6. Sender Mobile Number
    const cleanPhone = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      if (!firstInvalidId) firstInvalidId = 'field-mobile';
    }

    // 7. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      if (!firstInvalidId) firstInvalidId = 'field-email';
    }

    // 8. Sender Pickup Address
    if (!formData.senderAddress.trim()) {
      newErrors.senderAddress = 'Please enter complete pickup address';
      if (!firstInvalidId) firstInvalidId = 'field-senderAddress';
    }

    // 9. Receiver Name
    if (!formData.receiverName.trim()) {
      newErrors.receiverName = 'Please enter receiver name';
      if (!firstInvalidId) firstInvalidId = 'field-receiverName';
    }

    // 10. Receiver Mobile Number
    const cleanReceiverPhone = formData.receiverMobile.replace(/[^0-9]/g, '');
    if (!cleanReceiverPhone || cleanReceiverPhone.length < 10) {
      newErrors.receiverMobile = 'Please enter a valid 10-digit mobile number';
      if (!firstInvalidId) firstInvalidId = 'field-receiverMobile';
    }

    // 11. Receiver Delivery Address
    if (!formData.receiverAddress.trim()) {
      newErrors.receiverAddress = 'Please enter complete delivery address';
      if (!firstInvalidId) firstInvalidId = 'field-receiverAddress';
    }

    setErrors(newErrors);

    if (firstInvalidId) {
      setTimeout(() => {
        const el = document.getElementById(firstInvalidId);
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
      return false;
    }

    return true;
  };

  const buildShipmentMessage = (data: FormData): string => {
    const additional =
      data.additionalRequirements.trim() ||
      'Please arrange pickup and provide the available shipping option and estimated charges.';

    return `📦 SPL Shipment Enquiry

New Shipment Request

📦 Shipment Details
Pickup: ${data.pickupLocation.trim()}
Destination: ${data.destination.trim()}
Shipment Type: ${data.shipmentType.trim()}
Estimated Weight: ${data.estimatedWeight.trim()}

👤 Sender Details
Name: ${data.senderName.trim()}
📞 Mobile: ${data.mobile.trim()}
✉️ Email: ${data.email.trim()}
📍 Pickup Address:
${data.senderAddress.trim()}

👤 Receiver Details
Name: ${data.receiverName.trim()}
📞 Mobile: ${data.receiverMobile.trim()}
📍 Delivery Address:
${data.receiverAddress.trim()}

📝 Additional Requirements
${additional}

────────────────────

SPL Worldwide Express
📞 +91 98945 90600`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const snapshot = { ...formData };
    setSubmittedData(snapshot);

    const message = buildShipmentMessage(snapshot);
    setGeneratedMessage(message);
    setIsSubmitted(true);

    const testMessage = "📦 📞 ✉️ 👤 📍 📝";
    console.log(testMessage);
    console.log(testMessage.includes("📦"));
    console.log(testMessage.includes("📞"));
    console.log(testMessage.includes("✉️"));

    console.log("ACTUAL MESSAGE SENT TO WHATSAPP:", message);
    console.log("Sender Name:", formData.senderName);
    console.log("Sender Mobile:", formData.mobile);
    console.log("Sender Email:", formData.email);
    console.log("Sender Address:", formData.senderAddress);
    console.log("Receiver Name:", formData.receiverName);
    console.log("Receiver Mobile:", formData.receiverMobile);
    console.log("Receiver Address:", formData.receiverAddress);
    console.log("HAS SENDER PICKUP ADDRESS:", message.includes("📍 Pickup Address:"));
    console.log("HAS RECEIVER DELIVERY ADDRESS:", message.includes("📍 Delivery Address:"));
    console.log("HAS SENDER:", message.includes("Sender Details"));
    console.log("HAS RECEIVER:", message.includes("Receiver Details"));
    console.log("HAS PARCEL EMOJI:", message.includes("📦"));
    console.log("HAS PHONE EMOJI:", message.includes("📞"));
    console.log("HAS EMAIL EMOJI:", message.includes("✉️"));
    console.log("HAS PIN EMOJI:", message.includes("📍"));

    // Encode properly and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    console.log("ENCODED WHATSAPP MESSAGE:", encodedMessage);

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    console.log("WHATSAPP URL:", whatsappUrl);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmittedData(null);
    setIsSubmitted(false);
    setErrors({});
  };

  if (!isOpen) return null;

  // Active sender display name for confirmation screen
  const senderDisplayName = submittedData?.senderName?.trim() || formData.senderName?.trim() || 'Valued Customer';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-spl-navy-deep/75 backdrop-blur-xs transition-opacity duration-200 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        data-lenis-prevent
        className="w-full max-w-[580px] bg-white rounded-xl sm:rounded-2xl shadow-modal border border-slate-200/80 overflow-hidden flex flex-col transition-all transform duration-300 my-auto"
        style={{
          maxHeight: 'min(calc(100dvh - 24px), calc(100svh - 24px), 880px)',
        }}
      >
        {/* Modal Header: Sticky / Fixed at top */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-spl-navy-deep text-white flex items-center justify-between border-b border-spl-navy-secondary shrink-0 select-none">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" />
            <div className="h-7 w-[1px] bg-white/20 hidden sm:block" />
            <div>
              <h2 id="modal-title" className="font-heading font-bold text-[16px] sm:text-[18px] leading-tight text-white">
                Book a Shipment
              </h2>
              <p className="text-[11px] sm:text-[12px] text-slate-300 font-body">
                Official Enquiry &amp; Quote Dispatch
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-yellow cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 overflow-hidden" noValidate>
            {/* Modal Body: Dedicated Native Scrollable Region with Visually Hidden Scrollbar */}
            <div
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-4 no-scrollbar"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* ========================================================= */}
              {/* 1. SHIPMENT DETAILS */}
              {/* ========================================================= */}
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-spl-text-secondary block mb-2.5">
                  SHIPMENT DETAILS
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Pickup Location * */}
                  <div>
                    <label htmlFor="field-pickupLocation" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Pickup Location <span className="text-red-500 font-bold">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        id="field-pickupLocation"
                        type="text"
                        value={formData.pickupLocation}
                        onChange={(e) => {
                          setFormData({ ...formData, pickupLocation: e.target.value });
                          if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: undefined });
                        }}
                        placeholder="e.g. Thoothukudi, Tamil Nadu"
                        className={`w-full pl-9 pr-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                          errors.pickupLocation ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                        }`}
                      />
                    </div>
                    {errors.pickupLocation && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.pickupLocation}
                      </p>
                    )}
                  </div>

                  {/* Destination * */}
                  <div>
                    <label htmlFor="field-destination" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Destination <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      id="field-destination"
                      type="text"
                      value={formData.destination}
                      onChange={(e) => {
                        setFormData({ ...formData, destination: e.target.value });
                        if (errors.destination) setErrors({ ...errors, destination: undefined });
                      }}
                      placeholder="City, Country or Pincode"
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                        errors.destination ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    />
                    {errors.destination && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.destination}
                      </p>
                    )}
                  </div>

                  {/* Shipment Type * */}
                  <div>
                    <label htmlFor="field-shipmentType" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Shipment Type <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      id="field-shipmentType"
                      value={formData.shipmentType}
                      onChange={(e) => {
                        setFormData({ ...formData, shipmentType: e.target.value });
                        if (errors.shipmentType) setErrors({ ...errors, shipmentType: undefined });
                      }}
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border bg-white transition-all ${
                        errors.shipmentType ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    >
                      <option value="">Select Shipment Type</option>
                      {SHIPMENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.shipmentType && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.shipmentType}
                      </p>
                    )}
                  </div>

                  {/* Estimated Weight * */}
                  <div>
                    <label htmlFor="field-estimatedWeight" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Estimated Weight <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      id="field-estimatedWeight"
                      value={formData.estimatedWeight}
                      onChange={(e) => {
                        setFormData({ ...formData, estimatedWeight: e.target.value });
                        if (errors.estimatedWeight) setErrors({ ...errors, estimatedWeight: undefined });
                      }}
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border bg-white transition-all ${
                        errors.estimatedWeight ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    >
                      <option value="">Select Estimated Weight</option>
                      {WEIGHT_OPTIONS.map((weight) => (
                        <option key={weight} value={weight}>
                          {weight}
                        </option>
                      ))}
                    </select>
                    {errors.estimatedWeight && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.estimatedWeight}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* 2. SENDER CONTACT DETAILS */}
              {/* ========================================================= */}
              <div className="pt-3 border-t border-slate-200/70">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-spl-text-secondary block mb-2.5">
                  SENDER CONTACT DETAILS
                </span>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="field-senderName" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Sender Name <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      id="field-senderName"
                      type="text"
                      value={formData.senderName}
                      onChange={(e) => {
                        setFormData({ ...formData, senderName: e.target.value });
                        if (errors.senderName) setErrors({ ...errors, senderName: undefined });
                      }}
                      placeholder="e.g. Ramesh Kumar / ABC Exporters"
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                        errors.senderName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    />
                    {errors.senderName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.senderName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="field-mobile" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                        Mobile Number <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="field-mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => {
                          setFormData({ ...formData, mobile: e.target.value });
                          if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                        }}
                        placeholder="e.g. 94431 00000"
                        className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                          errors.mobile ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.mobile}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="field-email" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                        Email Address <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@example.com"
                        className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="field-senderAddress" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Pickup Address <span className="text-red-500 font-bold">*</span>
                    </label>
                    <textarea
                      id="field-senderAddress"
                      rows={3}
                      value={formData.senderAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, senderAddress: e.target.value });
                        if (errors.senderAddress) setErrors({ ...errors, senderAddress: undefined });
                      }}
                      placeholder="Enter complete pickup address (door/building, street, area, city, pincode)"
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all resize-none ${
                        errors.senderAddress ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    />
                    {errors.senderAddress && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.senderAddress}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* 3. RECEIVER DETAILS */}
              {/* ========================================================= */}
              <div className="pt-3 border-t border-slate-200/70">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-spl-text-secondary block mb-2.5">
                  RECEIVER DETAILS
                </span>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="field-receiverName" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                        Receiver Name <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="field-receiverName"
                        type="text"
                        value={formData.receiverName}
                        onChange={(e) => {
                          setFormData({ ...formData, receiverName: e.target.value });
                          if (errors.receiverName) setErrors({ ...errors, receiverName: undefined });
                        }}
                        placeholder="Enter receiver name"
                        className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                          errors.receiverName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                        }`}
                      />
                      {errors.receiverName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.receiverName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="field-receiverMobile" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                        Receiver Mobile Number <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="field-receiverMobile"
                        type="tel"
                        value={formData.receiverMobile}
                        onChange={(e) => {
                          setFormData({ ...formData, receiverMobile: e.target.value });
                          if (errors.receiverMobile) setErrors({ ...errors, receiverMobile: undefined });
                        }}
                        placeholder="Enter receiver mobile number"
                        className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all ${
                          errors.receiverMobile ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                        }`}
                      />
                      {errors.receiverMobile && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.receiverMobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="field-receiverAddress" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                      Delivery Address <span className="text-red-500 font-bold">*</span>
                    </label>
                    <textarea
                      id="field-receiverAddress"
                      rows={3}
                      value={formData.receiverAddress}
                      onChange={(e) => {
                        setFormData({ ...formData, receiverAddress: e.target.value });
                        if (errors.receiverAddress) setErrors({ ...errors, receiverAddress: undefined });
                      }}
                      placeholder="Enter complete delivery address (building, street, area, city, state, pincode)"
                      className={`w-full px-3 py-2 text-[13.5px] rounded-lg border transition-all resize-none ${
                        errors.receiverAddress ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep'
                      }`}
                    />
                    {errors.receiverAddress && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.receiverAddress}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* 4. OPTIONAL MESSAGE */}
              {/* ========================================================= */}
              <div className="pt-3 border-t border-slate-200/70">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-spl-text-secondary block mb-2.5">
                  OPTIONAL MESSAGE
                </span>
                <div>
                  <label htmlFor="field-additionalRequirements" className="block text-[13px] font-heading font-semibold text-spl-navy-deep mb-1">
                    Additional Message
                  </label>
                  <textarea
                    id="field-additionalRequirements"
                    rows={2}
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    placeholder="e.g. urgent delivery timeline, fragile goods, customs clearance details..."
                    className="w-full px-3 py-2 text-[13.5px] rounded-lg border border-slate-300 focus:border-spl-navy-deep focus:ring-1 focus:ring-spl-navy-deep resize-none transition-all"
                  />
                </div>
              </div>

              {/* Notice & Direct Phone support note */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-lg text-[12px] text-slate-600 border border-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Submitting opens your WhatsApp enquiry with our Thoothukudi dispatch team.
                  </span>
                </div>
                <a
                  href="tel:+919894590600"
                  className="inline-flex items-center gap-1.5 font-heading font-bold text-spl-navy-deep hover:text-spl-yellow transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{COMPANY_CONFIG.primaryContactPhone}</span>
                </a>
              </div>
            </div>

            {/* ACTION FOOTER: Dedicated Pinned Footer at Bottom of Modal */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-slate-50 border-t border-slate-200/90 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] py-2.5 sm:py-0 px-4 rounded-lg bg-spl-yellow text-spl-navy-deep font-heading font-bold text-[12px] min-[360px]:text-[13px] sm:text-[14px] tracking-wide sm:tracking-wider uppercase hover:bg-[#e6b800] hover:shadow-md transition-all select-none cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                <Send className="w-4 h-4 flex-shrink-0" />
                <span>REQUEST SHIPMENT</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="sm:w-auto inline-flex items-center justify-center min-h-[44px] sm:h-[46px] px-6 rounded-lg bg-white border border-spl-navy-deep/30 hover:border-spl-navy-deep text-spl-navy-deep font-heading font-bold text-[12px] sm:text-[13.5px] tracking-wider uppercase hover:bg-slate-50 transition-all select-none cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                CLOSE
              </button>
            </div>
          </form>
        ) : (
          /* ========================================================= */
          /* ENQUIRY CONFIRMATION STATE */
          /* ========================================================= */
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Scrollable confirmation body */}
            <div
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-center no-scrollbar"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="w-13 h-13 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-[18px] sm:text-[21px] text-spl-navy-deep">
                  Enquiry Initiated!
                </h3>
                <p className="text-[12.5px] sm:text-[14px] text-slate-600 max-w-[460px] mx-auto leading-relaxed">
                  Thank you, <strong className="text-spl-navy-deep font-bold">{senderDisplayName}</strong>. Your enquiry details have been prepared for WhatsApp transmission to our Thoothukudi team.
                </p>
              </div>

              {/* Message preview snippet: Scrollable, word-wrapping, no horizontal overflow */}
              <div
                className="text-left bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200 text-[11px] sm:text-[12px] font-mono whitespace-pre-wrap break-words [overflow-wrap:anywhere] text-slate-700 max-h-36 sm:max-h-48 overflow-y-auto overflow-x-hidden shadow-inner select-text no-scrollbar"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {generatedMessage}
              </div>
            </div>

            {/* Pinned Action Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-slate-50 border-t border-slate-200/90 shrink-0 space-y-2.5 sm:space-y-3">
              {/* ROW 1 — PRIMARY ACTIONS */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {/* REOPEN WHATSAPP CHAT */}
                <a
                  href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(generatedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 h-[46px] px-1 sm:px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold transition-all shadow-sm select-none cursor-pointer active:scale-[0.99] overflow-hidden"
                  title="Reopen WhatsApp Chat"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  {/* Deliberate 2-line layout for < 360px */}
                  <span className="flex min-[360px]:hidden flex-col items-center justify-center leading-tight text-[9.5px] tracking-tight uppercase">
                    <span>REOPEN</span>
                    <span className="whitespace-nowrap">WHATSAPP</span>
                  </span>
                  {/* Single line layout for >= 360px */}
                  <span className="hidden min-[360px]:inline whitespace-nowrap text-[10px] min-[390px]:text-[11px] min-[430px]:text-[12px] sm:text-[13px] tracking-tight min-[410px]:tracking-normal sm:tracking-wider uppercase">
                    REOPEN WHATSAPP CHAT
                  </span>
                </a>

                {/* CALL +91 98945 90600 */}
                <a
                  href="tel:+919894590600"
                  className="w-full inline-flex items-center justify-center gap-1 sm:gap-2 h-[46px] px-1 sm:px-4 rounded-lg bg-spl-navy-deep hover:bg-spl-navy-secondary text-white font-heading font-bold transition-all shadow-sm select-none cursor-pointer active:scale-[0.99] overflow-hidden"
                  title="Call +91 98945 90600"
                >
                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-spl-yellow flex-shrink-0" />
                  {/* Deliberate 2-line layout for < 360px as per Section 16 */}
                  <span className="flex min-[360px]:hidden flex-col items-center justify-center leading-tight text-[9.5px] tracking-tight uppercase">
                    <span>CALL US</span>
                    <span className="whitespace-nowrap">+91 98945 90600</span>
                  </span>
                  {/* Single line layout for >= 360px */}
                  <span className="hidden min-[360px]:inline whitespace-nowrap text-[10px] min-[390px]:text-[11px] min-[430px]:text-[12px] sm:text-[13px] tracking-tight min-[410px]:tracking-normal sm:tracking-wider uppercase">
                    CALL +91 98945 90600
                  </span>
                </a>
              </div>

              {/* ROW 2 — SECONDARY ACTIONS */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {/* NEW ENQUIRY */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center h-[44px] px-2 sm:px-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 hover:border-spl-navy-deep text-spl-navy-deep font-heading font-bold text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-[12px] sm:text-[13px] tracking-tight min-[390px]:tracking-normal sm:tracking-wider uppercase transition-all shadow-2xs select-none cursor-pointer whitespace-nowrap active:scale-[0.99]"
                >
                  <span>NEW ENQUIRY</span>
                </button>

                {/* DONE */}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center h-[44px] px-2 sm:px-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 hover:border-spl-navy-deep text-spl-navy-deep font-heading font-bold text-[10.5px] min-[360px]:text-[11.5px] min-[390px]:text-[12px] sm:text-[13px] tracking-tight min-[390px]:tracking-normal sm:tracking-wider uppercase transition-all shadow-2xs select-none cursor-pointer whitespace-nowrap active:scale-[0.99]"
                >
                  <span>DONE</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
