"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, Card, CardBody, Divider, Spinner, Tabs, Tab, RadioGroup, Radio } from "@nextui-org/react";
import { ArrowLeft, Printer, FileText, Download, Save, ArrowRight, CheckCircle, RefreshCw, User, Tag, Scale, Ruler, Zap, Settings, Hash, Weight, Move, SlidersHorizontal, Package, Dumbbell, Maximize, Wrench, Cog, Layers, Gauge, Clock, Leaf, Fuel, Volume2, Mail } from "lucide-react";
import jsPDF from 'jspdf';
import type { WooCommerceProduct } from "@/types/woocommerce";
import { fetchProductById } from "@/lib/woocommerce";
import { Logo } from "@/components/Logo";

export function ProductDetailClient() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<WooCommerceProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configSelections, setConfigSelections] = useState({
    electrical: {
      voltage: '',
      frequency: '',
      connections: '',
      powerOutput: ''
    },
    mechanical: {
      enclosure: '',
      mounting: '',
      soundAttenuation: ''
    },
    enclosures: {
      enclosureType: '',
      tankSize: '',
      accessories: [] as string[]
    }
  });
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const id = Number(params.id);
    if (!Number.isFinite(id)) {
      setError("Invalid product id");
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    fetchProductById(id)
      .then((p) => {
        if (!isMounted) return;
        setProduct(p);
        setError(null);
      })
      .catch((e) => {
        if (!isMounted) return;
        setError(e instanceof Error ? e.message : "Failed to load product");
        setProduct(null);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" color="danger" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto">
          <Button variant="flat" startContent={<ArrowLeft className="w-4 h-4" />} onClick={() => router.back()}>
            Back
          </Button>
          <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-gray-900">Couldn’t load product</h1>
            <p className="text-gray-600 mt-2">{error ?? "Unknown error"}</p>
          </div>
        </div>
      </div>
    );
  }

  const generateSpecificationPDF = async () => {
    if (!product) return;

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    let yPosition = 20;
    const headerHeight = 30;
    
    // Dark gray header background
    pdf.setFillColor(0, 0, 0);
    pdf.rect(0, 0, pageWidth, headerHeight, 'F');
    
    // Add centered logo
    try {
      const logoUrl = typeof window !== 'undefined' ? `${window.location.origin}/tehnolink-logo.png` : '/tehnolink-logo.png';
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = logoUrl;
      });
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const logoData = canvas.toDataURL('image/png');
        const logoWidth = 50;
        const logoHeight = (logoWidth / img.width) * img.height;
        const logoX = (pageWidth - logoWidth) / 2;
        const logoY = (headerHeight - logoHeight) / 2;
        pdf.addImage(logoData, 'PNG', logoX, logoY, logoWidth, logoHeight);
      }
    } catch (e) {
      console.log('Logo could not be loaded for PDF');
    }
    
    yPosition = headerHeight + 10;
    
    // Title
    pdf.setTextColor(51, 51, 51);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PRODUCT SPECIFICATIONS', margin + 2, yPosition + 7);
    pdf.setTextColor(0, 0, 0);
    
    yPosition += 15;
    
    // Product Info Section
    pdf.setFillColor(245, 245, 245);
    pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 51, 51);
    pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
    pdf.setTextColor(0, 0, 0);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
    pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
    
    yPosition += 45;
    
    // Specifications table
    const specItems = [];
    if (product.weight) specItems.push(['Weight', `${product.weight} kg`]);
    if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
      const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
      specItems.push(['Dimensions', dims]);
    }
    
    if (specItems.length > 0) {
      pdf.setFillColor(51, 51, 51);
      pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
      pdf.setTextColor(0, 0, 0);
      
      yPosition += 15;
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      
      specItems.forEach(([label, value], index) => {
        if (index % 2 === 0) {
          pdf.setFillColor(250, 250, 250);
          pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${label}:`, margin + 5, yPosition + 4);
        pdf.setFont('helvetica', 'normal');
        pdf.text(value, margin + 50, yPosition + 4);
        yPosition += 8;
      });
      yPosition += 10;
    }
    
    // Product attributes
    if (product.attributes && product.attributes.length > 0) {
      const visibleAttrs = product.attributes.filter(attr => attr.visible && attr.options.length > 0);
      if (visibleAttrs.length > 0) {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFillColor(51, 51, 51);
        pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        
        yPosition += 15;
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        
        visibleAttrs
          .sort((a, b) => {
            const aIsPower = a.name.toLowerCase().includes('power');
            const bIsPower = b.name.toLowerCase().includes('power');
            if (aIsPower && !bIsPower) return -1;
            if (!aIsPower && bIsPower) return 1;
            return 0;
          })
          .forEach((attr, index) => {
            if (yPosition > 270) {
              pdf.addPage();
              yPosition = 20;
            }
            
            if (index % 2 === 0) {
              pdf.setFillColor(250, 250, 250);
              pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.text(`${attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}:`, margin + 5, yPosition + 4);
            pdf.setFont('helvetica', 'normal');
            pdf.text(attr.options.join(', '), margin + 50, yPosition + 4);
            yPosition += 8;
          });
      }
    }
    
    // Footer
    yPosition += 15;
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.setDrawColor(51, 51, 51);
    pdf.setLineWidth(1);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Product Specifications`, margin, yPosition + 10);
    
    pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_specifications.pdf`);
  };

  const generatePDF = async () => {
    if (!product) return;

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    let yPosition = 20;
    
    // Add logo
    try {
      const logoUrl = '/tehnolink-logo.png';
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = logoUrl;
      });
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const logoData = canvas.toDataURL('image/png');
        const logoWidth = 40;
        const logoHeight = (logoWidth / img.width) * img.height;
        pdf.addImage(logoData, 'PNG', pageWidth - margin - logoWidth, yPosition, logoWidth, logoHeight);
      }
    } catch (e) {
      console.log('Logo could not be loaded for PDF');
    }
    
    yPosition += 5;
    
    // Title with brand red background
    pdf.setFillColor(218, 0, 24);
    pdf.rect(0, yPosition - 5, pageWidth, 25, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CONFIGURATION', margin + 5, yPosition + 8);
    pdf.setTextColor(0, 0, 0);
    
    yPosition += 30;
    
    // Product Info Section
    pdf.setFillColor(245, 245, 245);
    pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(218, 0, 24);
    pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
    pdf.setTextColor(0, 0, 0);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
    pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
    
    yPosition += 45;
    
    // Product Specifications Section
    const specItems = [];
    if (product.weight) specItems.push(['Weight', `${product.weight} kg`]);
    if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
      const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
      specItems.push(['Dimensions', dims]);
    }
    
    if (specItems.length > 0) {
      pdf.setFillColor(218, 0, 24);
      pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('PRODUCT SPECIFICATIONS', margin + 5, yPosition + 8);
      pdf.setTextColor(0, 0, 0);
      
      yPosition += 15;
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      
      specItems.forEach(([label, value], index) => {
        if (index % 2 === 0) {
          pdf.setFillColor(250, 250, 250);
          pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${label}:`, margin + 5, yPosition + 4);
        pdf.setFont('helvetica', 'normal');
        pdf.text(value, margin + 50, yPosition + 4);
        yPosition += 8;
      });
      yPosition += 10;
    }
    
    // Configuration Options Section
    yPosition += 5;
    if (yPosition > 230) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.setFillColor(218, 0, 24);
    pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CONFIGURATION OPTIONS', margin + 5, yPosition + 8);
    pdf.setTextColor(0, 0, 0);
    
    yPosition += 18;
    
    // Configuration boxes
    pdf.setFillColor(240, 240, 240);
    pdf.roundedRect(margin, yPosition, contentWidth, 100, 2, 2, 'F');
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    
    const configurations = [
      'General Configuration:',
      '- European CE Certification: EU Declaration of Conformity',
      '- CIS Certification: CIS Certification',
      '',
      'Electrical Configuration:',
      '- [To be configured by user]',
      '',
      'Mechanical Configuration:',
      '- [To be configured by user]',
      '',
      'Enclosures & Tanks:',
      '- [To be configured by user]'
    ];
    
    let configY = yPosition + 10;
    configurations.forEach(line => {
      if (line === '') {
        configY += 4;
      } else if (line.includes(':') && !line.startsWith('-')) {
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(218, 0, 24);
        pdf.text(line, margin + 10, configY);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
        configY += 7;
      } else {
        pdf.text(line, margin + 10, configY);
        configY += 6;
      }
    });
    
    yPosition += 110;
    
    // Footer
    yPosition += 15;
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.setDrawColor(218, 0, 24);
    pdf.setLineWidth(1);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Generator Configuration`, margin, yPosition + 10);
    
    pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_configuration.pdf`);
  };

  const generateConfigurationPDF = async () => {
    if (!product) return;

    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    let yPosition = 20;
    const headerHeight = 30;
    
    // Dark gray header background
    pdf.setFillColor(0, 0, 0);
    pdf.rect(0, 0, pageWidth, headerHeight, 'F');
    
    // Add centered logo
    try {
      const logoUrl = typeof window !== 'undefined' ? `${window.location.origin}/tehnolink-logo.png` : '/tehnolink-logo.png';
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = logoUrl;
      });
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const logoData = canvas.toDataURL('image/png');
        const logoWidth = 50;
        const logoHeight = (logoWidth / img.width) * img.height;
        const logoX = (pageWidth - logoWidth) / 2;
        const logoY = (headerHeight - logoHeight) / 2;
        pdf.addImage(logoData, 'PNG', logoX, logoY, logoWidth, logoHeight);
      }
    } catch (e) {
      console.log('Logo could not be loaded for PDF');
    }
    
    yPosition = headerHeight + 10;
    
    // Title
    pdf.setTextColor(51, 51, 51);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('COMPLETE CONFIGURATION', margin + 2, yPosition + 7);
    pdf.setTextColor(0, 0, 0);
    
    yPosition += 15;
    
    // Product Info Section
    pdf.setFillColor(245, 245, 245);
    pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, 'F');
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(51, 51, 51);
    pdf.text('PRODUCT INFORMATION', margin + 5, yPosition + 8);
    pdf.setTextColor(0, 0, 0);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Name: ${product.name}`, margin + 5, yPosition + 18);
    pdf.text(`SKU: ${product.sku || 'N/A'}`, margin + 5, yPosition + 26);
    
    yPosition += 45;
    
    // Specifications table
    const specItems = [];
    if (product.weight) specItems.push(['Weight', `${product.weight} kg`]);
    if (product.dimensions.length || product.dimensions.width || product.dimensions.height) {
      const dims = `${product.dimensions.length ? product.dimensions.length + 'L' : ''}${product.dimensions.width ? ' × ' + product.dimensions.width + 'W' : ''}${product.dimensions.height ? ' × ' + product.dimensions.height + 'H' : ''}`;
      specItems.push(['Dimensions', dims]);
    }
    
    if (specItems.length > 0) {
      pdf.setFillColor(51, 51, 51);
      pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
      pdf.setTextColor(0, 0, 0);
      
      yPosition += 15;
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      
      specItems.forEach(([label, value], index) => {
        if (index % 2 === 0) {
          pdf.setFillColor(250, 250, 250);
          pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${label}:`, margin + 5, yPosition + 4);
        pdf.setFont('helvetica', 'normal');
        pdf.text(value, margin + 50, yPosition + 4);
        yPosition += 8;
      });
      yPosition += 10;
    }
    
    // Product attributes
    if (product.attributes && product.attributes.length > 0) {
      const visibleAttrs = product.attributes.filter(attr => attr.visible && attr.options.length > 0);
      if (visibleAttrs.length > 0) {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 20;
        }
        
        pdf.setFillColor(51, 51, 51);
        pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text('TECHNICAL SPECIFICATIONS', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        
        yPosition += 15;
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        
        visibleAttrs
          .sort((a, b) => {
            const aIsPower = a.name.toLowerCase().includes('power');
            const bIsPower = b.name.toLowerCase().includes('power');
            if (aIsPower && !bIsPower) return -1;
            if (!aIsPower && bIsPower) return 1;
            return 0;
          })
          .forEach((attr, index) => {
            if (yPosition > 270) {
              pdf.addPage();
              yPosition = 20;
            }
            
            if (index % 2 === 0) {
              pdf.setFillColor(250, 250, 250);
              pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');
            }
            
            pdf.setFont('helvetica', 'bold');
            pdf.text(`${attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}:`, margin + 5, yPosition + 4);
            pdf.setFont('helvetica', 'normal');
            pdf.text(attr.options.join(', '), margin + 50, yPosition + 4);
            yPosition += 8;
          });
      }
    }
    
    // Custom Configuration Section
    const hasElectrical = configSelections.electrical.voltage || configSelections.electrical.frequency || configSelections.electrical.powerOutput;
    const hasMechanical = configSelections.mechanical.enclosure || configSelections.mechanical.mounting || configSelections.mechanical.soundAttenuation;
    const hasEnclosures = configSelections.enclosures.enclosureType || configSelections.enclosures.tankSize || configSelections.enclosures.accessories.length > 0;
    
    if (hasElectrical || hasMechanical || hasEnclosures) {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }
      
      pdf.setFillColor(51, 51, 51);
      pdf.roundedRect(margin, yPosition, contentWidth, 12, 3, 3, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('CUSTOM CONFIGURATION', margin + 5, yPosition + 8);
      pdf.setTextColor(0, 0, 0);
      
      yPosition += 15;
      
      // Electrical
      if (hasElectrical) {
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text('ELECTRICAL', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
        
        let itemY = yPosition + 16;
        if (configSelections.electrical.voltage) {
          pdf.text(`Voltage: ${configSelections.electrical.voltage}`, margin + 10, itemY);
          itemY += 7;
        }
        if (configSelections.electrical.frequency) {
          pdf.text(`Frequency: ${configSelections.electrical.frequency}`, margin + 10, itemY);
          itemY += 7;
        }
        if (configSelections.electrical.powerOutput) {
          pdf.text(`Power Output: ${configSelections.electrical.powerOutput}`, margin + 10, itemY);
        }
        yPosition += 35;
      }
      
      // Mechanical
      if (hasMechanical) {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 20;
        }
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text('MECHANICAL', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
        
        let itemY = yPosition + 16;
        if (configSelections.mechanical.enclosure) {
          pdf.text(`Enclosure Type: ${configSelections.mechanical.enclosure}`, margin + 10, itemY);
          itemY += 7;
        }
        if (configSelections.mechanical.mounting) {
          pdf.text(`Mounting: ${configSelections.mechanical.mounting}`, margin + 10, itemY);
          itemY += 7;
        }
        if (configSelections.mechanical.soundAttenuation) {
          pdf.text(`Sound Attenuation: ${configSelections.mechanical.soundAttenuation}`, margin + 10, itemY);
        }
        yPosition += 35;
      }
      
      // Enclosures
      if (hasEnclosures) {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = 20;
        }
        const accCount = configSelections.enclosures.accessories.length;
        const boxHeight = 25 + (accCount > 0 ? 7 : 0);
        
        pdf.setFillColor(245, 245, 245);
        pdf.roundedRect(margin, yPosition, contentWidth, boxHeight, 3, 3, 'F');
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text('ENCLOSURES & TANKS', margin + 5, yPosition + 8);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'normal');
        
        let itemY = yPosition + 16;
        if (configSelections.enclosures.enclosureType) {
          pdf.text(`Enclosure Type: ${configSelections.enclosures.enclosureType}`, margin + 10, itemY);
          itemY += 7;
        }
        if (configSelections.enclosures.tankSize) {
          pdf.text(`Tank Size: ${configSelections.enclosures.tankSize}`, margin + 10, itemY);
          itemY += 7;
        }
        if (accCount > 0) {
          pdf.text(`Accessories: ${configSelections.enclosures.accessories.join(', ')}`, margin + 10, itemY);
        }
        yPosition += boxHeight + 10;
      }
    }
    
    // Footer
    yPosition += 15;
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.setDrawColor(51, 51, 51);
    pdf.setLineWidth(1);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Generated on: ${new Date().toLocaleDateString()} | Tehnolink Complete Configuration`, margin, yPosition + 10);
    
    pdf.save(`${product.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_configuration.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black Header */}
      <div className="w-full bg-black">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <div className="flex items-center justify-between datasheet-print-hide">
            <Button variant="flat" startContent={<ArrowLeft className="w-4 h-4" />} onClick={() => router.back()} className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]">
              Back
            </Button>
            <Logo variant="navbar" />
            <div className="flex gap-3">
              <a 
                href="https://tehnolink.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018] px-3 py-2 rounded-md transition-colors"
              >
                Main website
              </a>
              <Button variant="flat" startContent={<User className="w-4 h-4" />} onClick={() => router.push('/login')} className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]">
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-6 sm:px-8 lg:px-10 py-6">

        <div className="datasheet mt-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_2fr] gap-8 items-start">
            {/* Left: product image + basic actions */}
            <div className="flex flex-col gap-4 flex-start h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="flat"
                      className="bg-grety-100 text-black border border-gray-100 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-100 flex items-center justify-center shadow-lg"
                      startContent={<Download className="w-4 h-4" />}
                      onClick={() => generateSpecificationPDF()}
                    >
                      Specification
                    </Button>
                    <Button
                      size="sm"
                      variant="flat"
                      className="bg-grey-100 text-black border border-gray-100 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-100 flex items-center justify-center shadow-lg"
                      startContent={<FileText className="w-4 h-4" />}
                    >
                      Documentation
                    </Button>
                  </div>
                </div>
              </div>

              {product.images?.[0]?.src ? (
                <Card className="shadow-none overflow-hidden bg-transparent border-0">
                  <CardBody className="p-0 flex items-center">
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt || product.name}
                      className="w-full h-64 object-cover rounded-[10px]"
                    />
                  </CardBody>
                </Card>
              ) : null}

              {/* Product Specifications */}
              <div className="mt-0">               
                <div className="border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.sku && (
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2">
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-[#da0018]" />
                              SKU:
                            </div>
                          </td>
                          <td className="px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2">{product.sku}</td>
                        </tr>
                      )}
                      
                      {product.weight && (
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2">
                            <div className="flex items-center gap-2">
                              <Dumbbell className="w-4 h-4 text-[#da0018]" />
                              Weight:
                            </div>
                          </td>
                          <td className="px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2">{product.weight} kg</td>
                        </tr>
                      )}
                      
                      {(product.dimensions.length || product.dimensions.width || product.dimensions.height) && (
                        <tr className="border-b border-gray-200">
                          <td className="px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2">
                            <div className="flex items-center gap-2">
                              <Maximize className="w-4 h-4 text-[#da0018]" />
                              Dimensions:
                            </div>
                          </td>
                          <td className="px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2">
                            {product.dimensions.length && `${product.dimensions.length}L`}
                            {product.dimensions.width && ` × ${product.dimensions.width}W`}
                            {product.dimensions.height && ` × ${product.dimensions.height}H`}
                          </td>
                        </tr>
                      )}

                      {product.attributes && product.attributes.length > 0 && (
                        product.attributes
                          .filter(attr => attr.visible && attr.options.length > 0)
                          .sort((a, b) => {
                            // Put Power attributes first
                            const aIsPower = a.name.toLowerCase().includes('power');
                            const bIsPower = b.name.toLowerCase().includes('power');
                            if (aIsPower && !bIsPower) return -1;
                            if (!aIsPower && bIsPower) return 1;
                            return 0;
                          })
                          .map((attribute) => {
                            // Map attribute names to specific icons
                            const getIcon = (name: string) => {
                              const iconMap: Record<string, React.ReactNode> = {
                                'engine': <Cog className="w-4 h-4 text-[#da0018]" />,
                                'model': <Layers className="w-4 h-4 text-[#da0018]" />,
                                'regulator': <Gauge className="w-4 h-4 text-[#da0018]" />,
                                'frequency': <Clock className="w-4 h-4 text-[#da0018]" />,
                                'emission': <Leaf className="w-4 h-4 text-[#da0018]" />,
                                'fuel': <Fuel className="w-4 h-4 text-[#da0018]" />,
                                'phase': <RefreshCw className="w-4 h-4 text-[#da0018]" />,
                                'acoustic': <Volume2 className="w-4 h-4 text-[#da0018]" />,
                                'voltage': <Zap className="w-4 h-4 text-[#da0018]" />,
                                'power': <Zap className="w-4 h-4 text-[#da0018]" />,
                              };
                              // Check if name contains any of the keys
                              for (const [key, icon] of Object.entries(iconMap)) {
                                if (name.toLowerCase().includes(key)) return icon;
                              }
                              return <Settings className="w-4 h-4 text-[#da0018]" />;
                            };
                            
                            return (
                              <tr key={attribute.id} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-3 py-2 text-sm text-gray-600 bg-gray-50 w-1/2 capitalize">
                                  <div className="flex items-center gap-2">
                                    {getIcon(attribute.name)}
                                    {attribute.name}:
                                  </div>
                                </td>
                                <td className="px-3 py-2 text-sm font-bold text-gray-900 bg-white w-1/2">
                                  {attribute.options.join(', ')}
                                </td>
                              </tr>
                            );
                          })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            <div className="px-6 py-5 bg-white rounded-lg h-full shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Configure your own</h2>
                  </div>
                  <Button
                    size="sm"
                    variant="flat"
                    className="bg-gray-100 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg"
                    startContent={<RefreshCw className="w-4 h-4" />}
                    onClick={() => {
                      setConfigSelections({
                        electrical: {
                          voltage: '',
                          frequency: '',
                          connections: '',
                          powerOutput: ''
                        },
                        mechanical: {
                          enclosure: '',
                          mounting: '',
                          soundAttenuation: ''
                        },
                        enclosures: {
                          enclosureType: '',
                          tankSize: '',
                          accessories: [] as string[]
                        }
                      });
                      setActiveTab('general');
                    }}
                  >
                    Start over
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="flat"
                    className="bg-gray-100 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg"
                    startContent={<Save className="w-4 h-4" />}
                    onClick={() => generateConfigurationPDF()}
                  >
                    Save configuration
                  </Button>
                </div>
              </div>

              <div className="w-full block mt-5">
              <Tabs
                aria-label="Configuration steps"
                color="primary"
                variant="underlined"
                fullWidth
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
                classNames={{
                  base: "w-full",
                  tabList:
                    "w-full border border-gray-300 rounded-[10px] overflow-hidden flex bg-white gap-0",
                  tab: "flex-1 px-4 h-10 text-sm font-semibold text-gray-700 data-[selected=true]:bg-[#333] data-[selected=true]:text-white rounded-none text-center focus:outline-none focus:ring-0 flex items-center justify-center border-r border-gray-300 last:border-r-0",
                  cursor: "hidden",
                }}
              >
                <Tab key="general" title="General">
                  <div className="mt-4 space-y-5">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">European CE Certification</p>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="flat"
                          className="bg-gray-50 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg"
                          startContent={<CheckCircle className="w-4 h-4" />}
                        >
                          EU Declaration of Conformity
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">CIS Certification</p>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="flat"
                          className="bg-gray-50 text-gray-800 rounded-[50px] px-4 py-2 h-10 focus:ring-0 focus:outline-none hover:bg-gray-300 flex items-center justify-center shadow-lg"
                          startContent={<CheckCircle className="w-4 h-4" />}
                        >
                          CIS Certification
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab key="electrical" title="Electrical">
                  <div className="mt-4 space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Voltage</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="voltage"
                            value="230V"
                            checked={configSelections.electrical.voltage === '230V'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, voltage: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">230V</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="voltage"
                            value="400V"
                            checked={configSelections.electrical.voltage === '400V'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, voltage: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">400V</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Frequency</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="frequency"
                            value="50Hz"
                            checked={configSelections.electrical.frequency === '50Hz'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, frequency: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">50 Hz</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="frequency"
                            value="60Hz"
                            checked={configSelections.electrical.frequency === '60Hz'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, frequency: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">60 Hz</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Power Output</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="powerOutput"
                            value="Standby"
                            checked={configSelections.electrical.powerOutput === 'Standby'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, powerOutput: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Standby</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="powerOutput"
                            value="Prime"
                            checked={configSelections.electrical.powerOutput === 'Prime'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              electrical: { ...prev.electrical, powerOutput: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Prime</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab key="mechanical" title="Mechanical">
                  <div className="mt-4 space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Enclosure Type</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosure"
                            value="Open"
                            checked={configSelections.mechanical.enclosure === 'Open'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, enclosure: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Open</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosure"
                            value="Silent"
                            checked={configSelections.mechanical.enclosure === 'Silent'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, enclosure: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Silent</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosure"
                            value="Weather Protected"
                            checked={configSelections.mechanical.enclosure === 'Weather Protected'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, enclosure: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Weather Protected</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Mounting</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="mounting"
                            value="Foot"
                            checked={configSelections.mechanical.mounting === 'Foot'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, mounting: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Foot</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="mounting"
                            value="Trailer"
                            checked={configSelections.mechanical.mounting === 'Trailer'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, mounting: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Trailer</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Sound Attenuation</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="soundAttenuation"
                            value="Standard"
                            checked={configSelections.mechanical.soundAttenuation === 'Standard'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, soundAttenuation: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Standard</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="soundAttenuation"
                            value="Super Silent"
                            checked={configSelections.mechanical.soundAttenuation === 'Super Silent'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              mechanical: { ...prev.mechanical, soundAttenuation: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Super Silent</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab key="enclosures" title="Enclosures & Tanks">
                  <div className="mt-4 space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Enclosure Type</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosureType"
                            value="Canopy"
                            checked={configSelections.enclosures.enclosureType === 'Canopy'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, enclosureType: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Canopy</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosureType"
                            value="Open"
                            checked={configSelections.enclosures.enclosureType === 'Open'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, enclosureType: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Open</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="enclosureType"
                            value="Silent"
                            checked={configSelections.enclosures.enclosureType === 'Silent'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, enclosureType: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Silent</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Tank Size</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="tankSize"
                            value="Small"
                            checked={configSelections.enclosures.tankSize === 'Small'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, tankSize: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Small</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="tankSize"
                            value="Medium"
                            checked={configSelections.enclosures.tankSize === 'Medium'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, tankSize: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Medium</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="radio"
                            name="tankSize"
                            value="Large"
                            checked={configSelections.enclosures.tankSize === 'Large'}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { ...prev.enclosures, tankSize: e.target.value }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded-full accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Large</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-3">Accessories</p>
                      <div className="flex flex-row flex-nowrap gap-6 items-center">
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="checkbox"
                            name="accessories"
                            value="Fuel Pump"
                            checked={configSelections.enclosures.accessories.includes('Fuel Pump')}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { 
                                ...prev.enclosures, 
                                accessories: e.target.checked 
                                  ? [...prev.enclosures.accessories, 'Fuel Pump']
                                  : prev.enclosures.accessories.filter(acc => acc !== 'Fuel Pump')
                              }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Fuel Pump</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="checkbox"
                            name="accessories"
                            value="Battery Charger"
                            checked={configSelections.enclosures.accessories.includes('Battery Charger')}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { 
                                ...prev.enclosures, 
                                accessories: e.target.checked 
                                  ? [...prev.enclosures.accessories, 'Battery Charger']
                                  : prev.enclosures.accessories.filter(acc => acc !== 'Battery Charger')
                              }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Battery Charger</span>
                        </label>
                        <label className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap">
                          <input
                            type="checkbox"
                            name="accessories"
                            value="Control Panel"
                            checked={configSelections.enclosures.accessories.includes('Control Panel')}
                            onChange={(e) => setConfigSelections(prev => ({
                              ...prev,
                              enclosures: { 
                                ...prev.enclosures, 
                                accessories: e.target.checked 
                                  ? [...prev.enclosures.accessories, 'Control Panel']
                                  : prev.enclosures.accessories.filter(acc => acc !== 'Control Panel')
                              }
                            }))}
                            className="w-5 h-5 border-2 border-gray-300 rounded accent-[#da0018] cursor-pointer shrink-0"
                          />
                          <span className="text-base text-gray-700 whitespace-nowrap">Control Panel</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab key="summary" title="Summary">
                  <div className="mt-4 space-y-6">
                    {/* Custom Configuration */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Custom Configuration</h3>
                      <div className="space-y-4">
                        {/* Electrical Configuration */}
                        {(configSelections.electrical.voltage || configSelections.electrical.frequency || configSelections.electrical.powerOutput) && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <h4 className="text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide">Electrical</h4>
                            <div className="space-y-1">
                              {configSelections.electrical.voltage && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Voltage:</span>
                                  <span className="font-medium text-gray-900">{configSelections.electrical.voltage}</span>
                                </div>
                              )}
                              {configSelections.electrical.frequency && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Frequency:</span>
                                  <span className="font-medium text-gray-900">{configSelections.electrical.frequency}</span>
                                </div>
                              )}
                              {configSelections.electrical.powerOutput && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Power Output:</span>
                                  <span className="font-medium text-gray-900">{configSelections.electrical.powerOutput}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Mechanical Configuration */}
                        {(configSelections.mechanical.enclosure || configSelections.mechanical.mounting || configSelections.mechanical.soundAttenuation) && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <h4 className="text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide">Mechanical</h4>
                            <div className="space-y-1">
                              {configSelections.mechanical.enclosure && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Enclosure Type:</span>
                                  <span className="font-medium text-gray-900">{configSelections.mechanical.enclosure}</span>
                                </div>
                              )}
                              {configSelections.mechanical.mounting && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Mounting:</span>
                                  <span className="font-medium text-gray-900">{configSelections.mechanical.mounting}</span>
                                </div>
                              )}
                              {configSelections.mechanical.soundAttenuation && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Sound Attenuation:</span>
                                  <span className="font-medium text-gray-900">{configSelections.mechanical.soundAttenuation}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Enclosures Configuration */}
                        {(configSelections.enclosures.enclosureType || configSelections.enclosures.tankSize || configSelections.enclosures.accessories.length > 0) && (
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <h4 className="text-xs font-semibold text-[#da0018] mb-2 uppercase tracking-wide">Enclosures & Tanks</h4>
                            <div className="space-y-1">
                              {configSelections.enclosures.enclosureType && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Enclosure Type:</span>
                                  <span className="font-medium text-gray-900">{configSelections.enclosures.enclosureType}</span>
                                </div>
                              )}
                              {configSelections.enclosures.tankSize && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Tank Size:</span>
                                  <span className="font-medium text-gray-900">{configSelections.enclosures.tankSize}</span>
                                </div>
                              )}
                              {configSelections.enclosures.accessories.length > 0 && (
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Accessories:</span>
                                  <span className="font-medium text-gray-900">{configSelections.enclosures.accessories.join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    
                    </div>
                </Tab>
              </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


